"use client";

import { motion } from "framer-motion";

type ContactProps = {
  content: {
    title: string;
    description: string;
    phoneLabel: string;
    addressLabel: string;
    address: string;
    hoursLabel: string;
    hoursWeek: string;
    hoursFriday: string;
    callButton: string;
    mapTitle: string;
  };
};

export default function Contact({ content }: ContactProps) {
  return (
    <section id="contact" className="contact-root section-wrap">
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

      <div className="contact-grid">
        <motion.address
          className="contact-card"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="contact-label">{content.phoneLabel}</p>
          <a href="tel:04-822-7005" className="contact-phone">
            04-822-7005
          </a>

          <p className="contact-label">{content.addressLabel}</p>
          <p>{content.address}</p>

          <p className="contact-label">{content.hoursLabel}</p>
          <p>{content.hoursWeek}</p>
          <p>{content.hoursFriday}</p>

          <a href="tel:04-822-7005" className="cta-button cta-primary contact-call">
            {content.callButton}
          </a>
        </motion.address>

        <motion.div
          className="contact-map-wrap"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <iframe
            title={content.mapTitle}
            src="https://www.google.com/maps?q=%D7%A0%D7%95%D7%95%D7%94%20%D7%A9%D7%90%D7%A0%D7%9F%20%D7%97%D7%99%D7%A4%D7%94&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="contact-map"
          />
        </motion.div>
      </div>
    </section>
  );
}
