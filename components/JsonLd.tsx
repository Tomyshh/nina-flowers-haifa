type JsonLdProps = {
  locale: "he" | "en";
};

export default function JsonLd({ locale }: JsonLdProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nina-flowers.co.il";
  const businessName = locale === "he" ? "פרחי נו\"ש" : "Nina Flowers";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Florist",
    "@id": `${siteUrl}/#florist`,
    name: businessName,
    alternateName: "Nina Flowers",
    image: `${siteUrl}/branding/banner.png`,
    url: `${siteUrl}/${locale}`,
    telephone: "+972-4-822-7005",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "נווה שאנן",
      addressLocality: "חיפה",
      addressCountry: "IL",
    },
    areaServed: ["חיפה", "ישראל"],
    sameAs: [],
    inLanguage: locale === "he" ? "he-IL" : "en-IL",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
