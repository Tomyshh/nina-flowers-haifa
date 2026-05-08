"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type GalleryProps = {
  locale: "he" | "en";
  content: {
    title: string;
    description: string;
    openImage: string;
    close: string;
    imageAltPrefix: string;
  };
};

const galleryIds = Array.from({ length: 9 }, (_, index) => index + 1);

export default function Gallery({ locale, content }: GalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = useMemo(
    () =>
      galleryIds.map((id) => ({
        id,
        src: `/images/gallery-${id}.jpeg`,
        alt: `${content.imageAltPrefix} ${id}`,
      })),
    [content.imageAltPrefix],
  );

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenIndex(null);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  return (
    <section id="gallery" className="gallery-root section-wrap">
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

      <div className="gallery-grid">
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            className="gallery-item"
            onClick={() => setOpenIndex(index)}
            aria-label={`${content.openImage}: ${item.alt}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="gallery-image"
            />
          </motion.button>
        ))}
      </div>

      {openIndex !== null ? (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={items[openIndex].alt}
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            className="gallery-close"
            onClick={() => setOpenIndex(null)}
          >
            {content.close}
          </button>
          <div
            className="gallery-lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={items[openIndex].src}
              alt={items[openIndex].alt}
              fill
              priority
              sizes="90vw"
              className="gallery-lightbox-image"
            />
          </div>
        </div>
      ) : null}

      <span className="visually-hidden">
        {locale === "he" ? "גלריית פרחים חיפה" : "Haifa flower gallery"}
      </span>
    </section>
  );
}
