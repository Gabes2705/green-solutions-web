"use client";

import { useRef, useState } from "react";
import styles from "./Hero.module.css";

/**
 * The 33-second film, opened on request. It used to start by itself on every
 * visit and weighed almost 6 MB; now nothing is fetched until it is asked for,
 * and closing the dialog drops the video again.
 */
export default function CoverFilm({ label, closeLabel }: { label: string; closeLabel: string }) {
  const dialog = useRef<HTMLDialogElement | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={styles.filmBtn}
        onClick={() => {
          setOpen(true);
          dialog.current?.showModal();
        }}
      >
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="8.6" />
          <path d="M8 6.6 13.6 10 8 13.4Z" />
        </svg>
        <span>{label}</span>
      </button>

      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-label={label}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
      >
        {open && (
          <video
            src="/videos/film-hero-runaway-33s-sans-son.mp4..mp4"
            poster="/images/film-hero-poster.jpg"
            controls
            autoPlay
            muted
            playsInline
          />
        )}
        <button
          type="button"
          className={styles.dialogClose}
          aria-label={closeLabel}
          onClick={() => dialog.current?.close()}
        >
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M4.5 4.5 15.5 15.5M15.5 4.5 4.5 15.5" />
          </svg>
        </button>
      </dialog>
    </>
  );
}
