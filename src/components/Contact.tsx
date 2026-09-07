"use client";

import { useState, useEffect, type FormEvent } from "react";
import { useLanguage } from "@/lib/LanguageContext";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const { c } = useLanguage();
  const ct = c.contact;

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    const id = setInterval(() => {
      setTitleIndex((i) => (i + 1) % ct.titles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [ct.titles.length]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: data.get("nom"),
          structure: data.get("structure"),
          email: data.get("email"),
          message: data.get("message"),
          societe_site: data.get("societe_site"),
        }),
      });

      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error || ct.errorDefault);
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg(ct.errorNetwork);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="section-inner contact-inner">
        <div className="contact-copy">
          <p className="eyebrow">{ct.eyebrow}</p>
          <h2 className="section-title">
            <span key={titleIndex} className="contact-title-rotate">
              {ct.titles[titleIndex]}
            </span>
          </h2>
          <p className="lede">{ct.lede}</p>
          <ul className="contact-details">
            <li>
              <span>{ct.labelEmail}</span>
              <a href="mailto:contact@evergreen-ecosorb.com">
                contact@evergreen-ecosorb.com
              </a>
            </li>
            <li>
              <span>{ct.labelAddress}</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=821+Chemin+des+Clapiers%2C+83220+Le+Pradet%2C+France"
                target="_blank"
                rel="noreferrer"
              >
                821 Chemin des Clapiers, 83220 Le Pradet, France
              </a>
            </li>
          </ul>
        </div>

        {status === "sent" ? (
          <div className="contact-form contact-success" role="status">
            <p className="contact-success-title">{ct.successTitle}</p>
            <p>
              {ct.successText}{" "}
              <a href="mailto:contact@evergreen-ecosorb.com">
                contact@evergreen-ecosorb.com
              </a>
              .
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {/* honeypot — hidden from real visitors, left blank by them */}
            <label className="hp-field" aria-hidden="true">
              {ct.honeypotLabel}
              <input
                type="text"
                name="societe_site"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>

            <label>
              {ct.formName}
              <input type="text" name="nom" autoComplete="name" required />
            </label>
            <label>
              {ct.formStructure}
              <input type="text" name="structure" autoComplete="organization" />
            </label>
            <label>
              {ct.formEmail}
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label>
              {ct.formMessage}
              <textarea name="message" rows={4} required />
            </label>

            {status === "error" && (
              <p className="contact-error" role="alert">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="btn-3d btn-3d-light"
              disabled={status === "sending"}
            >
              {status === "sending" ? ct.sending : ct.send}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
