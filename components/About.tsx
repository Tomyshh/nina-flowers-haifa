"use client";

import { motion, useReducedMotion } from "framer-motion";

type AboutProps = {
  content: {
    title: string;
    description: string;
    card1Title: string;
    card1Text: string;
    card2Title: string;
    card2Text: string;
    card3Title: string;
    card3Text: string;
  };
};

const cardGlyphs = ["✦", "❋", "✧"] as const;

export default function About({ content }: AboutProps) {
  const prefersReducedMotion = useReducedMotion();
  const cards = [
    { title: content.card1Title, text: content.card1Text },
    { title: content.card2Title, text: content.card2Text },
    { title: content.card3Title, text: content.card3Text },
  ];

  const hoverProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { y: -8, transition: { type: "spring" as const, stiffness: 380, damping: 22 } },
      };

  return (
    <section id="about" className="about-root section-wrap" aria-labelledby="about-heading">
      <div className="about-backdrop" aria-hidden />
      <div className="about-inner">
        <header className="about-header">
          <motion.div
            className="about-flourish"
            aria-hidden
            initial={{ opacity: 0, scaleX: 0.3 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.h2
            id="about-heading"
            className="section-title about-section-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55 }}
          >
            {content.title}
          </motion.h2>
          <motion.p
            className="section-description about-section-lead"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            {content.description}
          </motion.p>
        </header>

        <div className="about-grid">
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              className="about-card"
              data-card={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12,
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.25 }}
              {...hoverProps}
            >
              <span className="about-card-shine" aria-hidden />
              <div className="about-icon-ring" data-variant={index}>
                <span className="about-icon-glyph" aria-hidden>
                  {cardGlyphs[index]}
                </span>
              </div>
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-text">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
