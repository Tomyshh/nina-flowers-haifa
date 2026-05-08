"use client";

import { useEffect, useState } from "react";
import LanguageToggle from "./LanguageToggle";

type NavbarProps = {
  locale: "he" | "en";
  labels: {
    about: string;
    gallery: string;
    contact: string;
    callNow: string;
  };
};

export default function Navbar({ locale, labels }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-root ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="section-wrap nav-shell">
        <a href="#top" className="nav-brand" aria-label="Nina Flowers">
          <span className="nav-brand-main">פרחי נו״ש</span>
        </a>

        <nav
          className="nav-links"
          dir={locale === "he" ? "rtl" : "ltr"}
          aria-label={locale === "he" ? "ניווט ראשי" : "Main navigation"}
        >
          <a href="#about">{labels.about}</a>
          <a href="#gallery">{labels.gallery}</a>
          <a href="#contact">{labels.contact}</a>
        </nav>

        <div className="nav-actions">
          <LanguageToggle locale={locale} />
          <a href="tel:04-822-7005" className="cta-button cta-primary nav-call">
            <span aria-hidden>☎</span>
            <span>{labels.callNow}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
