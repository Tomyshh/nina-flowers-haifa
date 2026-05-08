"use client";

import UnicornScene from "unicornstudio-react/next";
import { motion } from "framer-motion";

const unicornConfig = {
  projectId: "cSUdyCUWCzibPJV4ubzB",
  width: "1440px",
  height: "900px",
  scale: 1,
  dpi: 1.5,
  lazyLoad: false,
  production: false,
  sdkUrl:
    "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.12/dist/unicornStudio.umd.js",
};

// Increase this version string when you re-export a scene to force refresh.
const unicornSceneVersion = "v3";

type HeroProps = {
  locale: "he" | "en";
  content: {
    kicker: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
};

export default function Hero({ locale, content }: HeroProps) {
  const sceneKey = `${unicornConfig.projectId}-${unicornSceneVersion}`;
  const sdkUrlWithVersion = `${unicornConfig.sdkUrl}?scene=${encodeURIComponent(unicornSceneVersion)}`;
  const locationLine =
    locale === "he"
      ? "בוטיק פרחים מקומי בנווה שאנן, חיפה"
      : "Local flower boutique in Neve Shaanan, Haifa";
  const serviceTags =
    locale === "he"
      ? ["פרחים לכל אירוע", "עיצוב אישי", "שירות מהיר"]
      : ["Flowers for every occasion", "Custom design", "Fast service"];

  return (
    <section id="top" className="hero-root" aria-label={content.title}>
      <div className="hero-unicorn" aria-hidden>
        <UnicornScene
          key={sceneKey}
          projectId={unicornConfig.projectId}
          width={unicornConfig.width}
          height={unicornConfig.height}
          scale={unicornConfig.scale}
          dpi={unicornConfig.dpi}
          lazyLoad={unicornConfig.lazyLoad}
          production={unicornConfig.production}
          sdkUrl={sdkUrlWithVersion}
          onError={(error) => {
            console.error("Unicorn scene failed to load:", error);
          }}
        />
      </div>

      <div className="hero-vignette" aria-hidden />

      <div className="section-wrap hero-content">
        <motion.span
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="hero-eyebrow-dot" aria-hidden />
          {content.kicker}
        </motion.span>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.05 }}
        >
          {content.title}
        </motion.h1>

        <motion.div
          className="hero-divider"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          aria-hidden
        >
          <span className="hero-divider-line" />
          <span className="hero-divider-mark">✦</span>
          <span className="hero-divider-line" />
        </motion.div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22 }}
        >
          {content.subtitle}
        </motion.p>

        <motion.p
          className="hero-location-line"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.32 }}
        >
          {locationLine}
        </motion.p>

        <motion.div
          className="hero-tags"
          aria-hidden
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {serviceTags.map((tag) => (
            <span key={tag} className="hero-tag">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <a href="tel:04-822-7005" className="cta-button cta-primary">
            {content.ctaPrimary}
          </a>
          <a href="#gallery" className="cta-button cta-secondary">
            {content.ctaSecondary}
          </a>
        </motion.div>
      </div>

      <span className="visually-hidden">
        {locale === "he" ? "פרחי נוש חיפה" : "Nina Flowers Haifa"}
      </span>
    </section>
  );
}
