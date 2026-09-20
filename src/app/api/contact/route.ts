import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "contact@evergreen-ecosorb.com";
const FROM_EMAIL = "contact@evergreen-ecosorb.com";

type Payload = {
  type?: "contact" | "partner";
  nom?: string;
  structure?: string;
  site?: string;
  adresse?: string;
  codePostal?: string;
  telephone?: string;
  pays?: string;
  ville?: string;
  culture?: string;
  surface?: string;
  email?: string;
  message?: string;
  // honeypot — real users never fill this, bots often do
  societe_site?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  // honeypot: silently pretend success so the bot doesn't learn anything
  if (body.societe_site) {
    return NextResponse.json({ ok: true });
  }

  const nom = (body.nom || "").trim();
  const structure = (body.structure || "").trim();
  const site = (body.site || "").trim();
  const adresse = (body.adresse || "").trim();
  const codePostal = (body.codePostal || "").trim();
  const telephone = (body.telephone || "").trim();
  const pays = (body.pays || "").trim();
  const ville = (body.ville || "").trim();
  const culture = (body.culture || "").trim();
  const surface = (body.surface || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  const isPartner = body.type === "partner";

  if (!nom || !email || !message || (isPartner && (!structure || !adresse || !codePostal || !ville || !pays || !telephone))) {
    return NextResponse.json(
      { error: isPartner ? "Tous les champs obligatoires doivent être renseignés." : "Nom, e-mail et message sont requis." },
      { status: 400 }
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Adresse e-mail invalide." },
      { status: 400 }
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message trop long (5000 caractères max)." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "RESEND_API_KEY manquante — voir .env.local.example pour la configuration."
    );
    return NextResponse.json(
      {
        error:
          "L'envoi n'est pas encore configuré côté serveur. Contactez-nous directement à contact@evergreen-ecosorb.com.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const escapeHtml = (s: string) =>
    s.replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string)
    );

  const subject = `${isPartner ? "Nouvelle demande de partenariat" : "Nouveau contact"} — ${nom}${structure ? ` (${structure})` : ""}`;
  const bodyHtml = `
        <p><strong>Nom :</strong> ${escapeHtml(nom)}</p>
        <p><strong>Structure :</strong> ${escapeHtml(structure) || "—"}</p>
        <p><strong>Site internet :</strong> ${escapeHtml(site) || "—"}</p>
        <p><strong>Adresse :</strong> ${escapeHtml(adresse) || "—"}</p>
        <p><strong>Code postal :</strong> ${escapeHtml(codePostal) || "—"}</p>
        <p><strong>Pays :</strong> ${escapeHtml(pays) || "—"}</p>
        <p><strong>Ville :</strong> ${escapeHtml(ville) || "—"}</p>
        <p><strong>Téléphone :</strong> ${escapeHtml(telephone) || "—"}</p>
        <p><strong>Type de culture :</strong> ${escapeHtml(culture) || "—"}</p>
        <p><strong>Surface cultivée :</strong> ${escapeHtml(surface) || "—"}</p>
        <p><strong>E-mail :</strong> ${escapeHtml(email)}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `;

  try {
    const { error } = await resend.emails.send({
      from: `Green Solutions — Site <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html: bodyHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "L'envoi a échoué. Réessayez ou écrivez-nous directement." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failure:", err);
    return NextResponse.json(
      { error: "L'envoi a échoué. Réessayez ou écrivez-nous directement." },
      { status: 502 }
    );
  }
}
