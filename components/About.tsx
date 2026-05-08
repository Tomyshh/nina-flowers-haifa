"use client";

import { motion } from "framer-motion";

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

const cardIcons = ["✿", "❀", "❁"];

export default function About({ content }: AboutProps) {
  const cards = [
    { title: content.card1Title, text: content.card1Text },
    { title: content.card2Title, text: content.card2Text },
    { title: content.card3Title, text: content.card3Text },
  ];

  return (
    <section id="about" className="about-root section-wrap">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {content.title}
      </motion.h2>
      <motion.p
        className="section-description"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        {content.description}
      </motion.p>

      <div className="about-grid">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            className="about-card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="about-icon" aria-hidden>
              {cardIcons[index]}
            </span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
