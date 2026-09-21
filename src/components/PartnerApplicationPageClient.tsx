"use client";

import { useState, type FormEvent } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";
import type { Lang } from "@/lib/content";

type Status = "idle" | "sending" | "sent" | "error";

const COPY: Record<Lang, {
  eyebrow: string; title: string; lede: string; promise: string;
  name: string; company: string; website: string; address: string;
  city: string; country: string; postal: string; phone: string;
  email: string; comment: string; send: string; sending: string;
  success: string; error: string; back: string;
}> = {
  fr: { eyebrow: "Partenariats", title: "Devenir partenaire", lede: "Présentez-nous votre entreprise et votre projet de collaboration.", promise: "Nous vous répondrons sous 24 heures.", name: "Nom et prénom", company: "Société", website: "Site internet", address: "Adresse complète", city: "Ville", country: "Pays", postal: "Code postal", phone: "Numéro de téléphone", email: "Adresse e-mail", comment: "Commentaire", send: "Envoyer ma demande", sending: "Envoi…", success: "Votre demande a bien été envoyée. Nous vous répondrons sous 24 heures.", error: "L’envoi a échoué. Réessayez ou écrivez-nous directement.", back: "Retour au site" },
  en: { eyebrow: "Partnerships", title: "Become a partner", lede: "Tell us about your company and your proposed collaboration.", promise: "We will reply within 24 hours.", name: "Full name", company: "Company", website: "Website", address: "Full address", city: "City", country: "Country", postal: "Postal code", phone: "Phone number", email: "Email address", comment: "Comments", send: "Send my request", sending: "Sending…", success: "Your request has been sent. We will reply within 24 hours.", error: "Sending failed. Please try again or email us directly.", back: "Back to the site" },
  es: { eyebrow: "Alianzas", title: "Hacerse socio", lede: "Preséntenos su empresa y su propuesta de colaboración.", promise: "Le responderemos en un plazo de 24 horas.", name: "Nombre completo", company: "Empresa", website: "Sitio web", address: "Dirección completa", city: "Ciudad", country: "País", postal: "Código postal", phone: "Teléfono", email: "Correo electrónico", comment: "Comentario", send: "Enviar mi solicitud", sending: "Enviando…", success: "Su solicitud ha sido enviada. Le responderemos en 24 horas.", error: "No se pudo enviar. Inténtelo de nuevo o escríbanos.", back: "Volver al sitio" },
  pt: { eyebrow: "Parcerias", title: "Tornar-se parceiro", lede: "Apresente-nos a sua empresa e a sua proposta de colaboração.", promise: "Responderemos no prazo de 24 horas.", name: "Nome completo", company: "Empresa", website: "Website", address: "Morada completa", city: "Cidade", country: "País", postal: "Código postal", phone: "Telefone", email: "E-mail", comment: "Comentário", send: "Enviar pedido", sending: "A enviar…", success: "O seu pedido foi enviado. Responderemos em 24 horas.", error: "O envio falhou. Tente novamente ou escreva-nos.", back: "Voltar ao site" },
  ar: { eyebrow: "الشراكات", title: "كن شريكًا", lede: "عرّفنا بشركتك ومشروع التعاون المقترح.", promise: "سنرد عليكم خلال 24 ساعة.", name: "الاسم الكامل", company: "الشركة", website: "الموقع الإلكتروني", address: "العنوان الكامل", city: "المدينة", country: "الدولة", postal: "الرمز البريدي", phone: "رقم الهاتف", email: "البريد الإلكتروني", comment: "تعليق", send: "إرسال الطلب", sending: "جارٍ الإرسال…", success: "تم إرسال طلبكم. سنرد خلال 24 ساعة.", error: "تعذر الإرسال. حاولوا مجددًا أو راسلونا.", back: "العودة إلى الموقع" },
  zh: { eyebrow: "合作伙伴", title: "成为合作伙伴", lede: "请向我们介绍贵公司及合作计划。", promise: "我们将在24小时内回复。", name: "姓名", company: "公司", website: "网站", address: "完整地址", city: "城市", country: "国家", postal: "邮政编码", phone: "电话号码", email: "电子邮箱", comment: "留言", send: "提交申请", sending: "正在发送…", success: "申请已发送。我们将在24小时内回复。", error: "发送失败，请重试或直接联系我们。", back: "返回网站" },
  id: { eyebrow: "Kemitraan", title: "Menjadi mitra", lede: "Ceritakan tentang perusahaan dan rencana kerja sama Anda.", promise: "Kami akan membalas dalam 24 jam.", name: "Nama lengkap", company: "Perusahaan", website: "Situs web", address: "Alamat lengkap", city: "Kota", country: "Negara", postal: "Kode pos", phone: "Nomor telepon", email: "Alamat email", comment: "Komentar", send: "Kirim permintaan", sending: "Mengirim…", success: "Permintaan Anda telah dikirim. Kami akan membalas dalam 24 jam.", error: "Pengiriman gagal. Coba lagi atau hubungi kami langsung.", back: "Kembali ke situs" },
  de: { eyebrow: "Partnerschaften", title: "Partner werden", lede: "Stellen Sie uns Ihr Unternehmen und Ihr Kooperationsvorhaben vor.", promise: "Wir antworten Ihnen innerhalb von 24 Stunden.", name: "Vor- und Nachname", company: "Unternehmen", website: "Website", address: "Vollständige Anschrift", city: "Stadt", country: "Land", postal: "Postleitzahl", phone: "Telefonnummer", email: "E-Mail-Adresse", comment: "Kommentar", send: "Anfrage senden", sending: "Wird gesendet…", success: "Ihre Anfrage wurde gesendet. Wir antworten innerhalb von 24 Stunden.", error: "Der Versand ist fehlgeschlagen. Bitte versuchen Sie es erneut.", back: "Zurück zur Website" },
  it: { eyebrow: "Partnership", title: "Diventa partner", lede: "Presentateci la vostra azienda e la proposta di collaborazione.", promise: "Vi risponderemo entro 24 ore.", name: "Nome e cognome", company: "Società", website: "Sito internet", address: "Indirizzo completo", city: "Città", country: "Paese", postal: "CAP", phone: "Numero di telefono", email: "Indirizzo e-mail", comment: "Commento", send: "Invia la richiesta", sending: "Invio…", success: "La richiesta è stata inviata. Risponderemo entro 24 ore.", error: "Invio non riuscito. Riprovate o scriveteci.", back: "Torna al sito" },
  el: { eyebrow: "Συνεργασίες", title: "Γίνετε συνεργάτης", lede: "Παρουσιάστε μας την εταιρεία σας και την πρόταση συνεργασίας.", promise: "Θα σας απαντήσουμε εντός 24 ωρών.", name: "Ονοματεπώνυμο", company: "Εταιρεία", website: "Ιστότοπος", address: "Πλήρης διεύθυνση", city: "Πόλη", country: "Χώρα", postal: "Ταχυδρομικός κώδικας", phone: "Τηλέφωνο", email: "E-mail", comment: "Σχόλιο", send: "Αποστολή αιτήματος", sending: "Αποστολή…", success: "Το αίτημά σας εστάλη. Θα απαντήσουμε εντός 24 ωρών.", error: "Η αποστολή απέτυχε. Δοκιμάστε ξανά.", back: "Επιστροφή στον ιστότοπο" },
  tr: { eyebrow: "İş ortaklıkları", title: "İş ortağımız olun", lede: "Şirketinizi ve iş birliği projenizi bize tanıtın.", promise: "Size 24 saat içinde yanıt vereceğiz.", name: "Ad soyad", company: "Şirket", website: "İnternet sitesi", address: "Açık adres", city: "Şehir", country: "Ülke", postal: "Posta kodu", phone: "Telefon numarası", email: "E-posta adresi", comment: "Yorum", send: "Başvuruyu gönder", sending: "Gönderiliyor…", success: "Başvurunuz gönderildi. 24 saat içinde yanıt vereceğiz.", error: "Gönderim başarısız. Tekrar deneyin.", back: "Siteye dön" },
  pl: { eyebrow: "Partnerstwo", title: "Zostań partnerem", lede: "Przedstaw nam swoją firmę i propozycję współpracy.", promise: "Odpowiemy w ciągu 24 godzin.", name: "Imię i nazwisko", company: "Firma", website: "Strona internetowa", address: "Pełny adres", city: "Miasto", country: "Kraj", postal: "Kod pocztowy", phone: "Numer telefonu", email: "Adres e-mail", comment: "Komentarz", send: "Wyślij zgłoszenie", sending: "Wysyłanie…", success: "Zgłoszenie zostało wysłane. Odpowiemy w ciągu 24 godzin.", error: "Wysyłanie nie powiodło się. Spróbuj ponownie.", back: "Powrót do strony" },
  hr: { eyebrow: "Partnerstva", title: "Postanite partner", lede: "Predstavite nam svoju tvrtku i prijedlog suradnje.", promise: "Odgovorit ćemo vam u roku od 24 sata.", name: "Ime i prezime", company: "Tvrtka", website: "Internetska stranica", address: "Puna adresa", city: "Grad", country: "Država", postal: "Poštanski broj", phone: "Broj telefona", email: "E-adresa", comment: "Komentar", send: "Pošalji zahtjev", sending: "Slanje…", success: "Zahtjev je poslan. Odgovorit ćemo u roku od 24 sata.", error: "Slanje nije uspjelo. Pokušajte ponovno.", back: "Povratak na stranicu" },
};

export default function PartnerApplicationPageClient() {
  const { language } = useLanguage();
  const t = COPY[language];
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "partner",
          nom: data.get("nom"), structure: data.get("structure"),
          site: data.get("site"), adresse: data.get("adresse"),
          ville: data.get("ville"), pays: data.get("pays"),
          codePostal: data.get("codePostal"), telephone: data.get("telephone"),
          email: data.get("email"), message: data.get("message"),
          societe_site: data.get("societe_site"),
        }),
      });
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || t.error);
      setStatus("sent");
      form.reset();
    } catch (cause) {
      setStatus("error");
      setError(cause instanceof Error ? cause.message : t.error);
    }
  }

  return (
    <main className="partner-application-page">
      <div className="tech-bar partner-application-bar">
        <a href={`/${language}`} className="tech-back btn-3d btn-3d-light">← {t.back}</a>
        <LanguageSwitcher />
      </div>
      <section className="partner-application-shell">
        <header className="partner-application-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="lede">{t.lede}</p>
          <p className="partner-promise">{t.promise}</p>
        </header>
        {status === "sent" ? (
          <div className="contact-form contact-success" role="status"><p className="contact-success-title">{t.success}</p></div>
        ) : (
          <form className="contact-form partner-application-form" onSubmit={submit} noValidate>
            <label className="hp-field" aria-hidden="true">Website<input name="societe_site" tabIndex={-1} autoComplete="off" /></label>
            <label>{t.name}<input name="nom" autoComplete="name" maxLength={120} required /></label>
            <label>{t.company}<input name="structure" autoComplete="organization" maxLength={160} required /></label>
            <label>{t.website}<input name="site" type="url" inputMode="url" autoComplete="url" maxLength={300} /></label>
            <label>{t.address}<input name="adresse" autoComplete="street-address" maxLength={300} required /></label>
            <div className="contact-form-row">
              <label>{t.city}<input name="ville" autoComplete="address-level2" maxLength={120} required /></label>
              <label>{t.postal}<input name="codePostal" autoComplete="postal-code" maxLength={30} required /></label>
            </div>
            <label>{t.country}<input name="pays" autoComplete="country-name" maxLength={120} required /></label>
            <label>{t.phone}<input name="telephone" type="tel" autoComplete="tel" maxLength={50} required /></label>
            <label>{t.email}<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
            <label>{t.comment}<textarea name="message" rows={6} maxLength={5000} required /></label>
            {status === "error" && <p className="contact-error" role="alert">{error}</p>}
            <button className="btn-3d btn-3d-light" type="submit" disabled={status === "sending"}>{status === "sending" ? t.sending : t.send}</button>
          </form>
        )}
      </section>
    </main>
  );
}
