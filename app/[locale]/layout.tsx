import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/site-url";
import { routing, type AppLocale } from "@/i18n/routing";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const siteUrl = SITE_URL;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    return {};
  }
  const currentLocale = locale as AppLocale;

  const isHebrew = currentLocale === "he";
  const title = isHebrew
    ? "פרחי נו\"ש | חנות פרחים בחיפה - נווה שאנן"
    : "Nina Flowers | Flower Shop in Haifa";
  const description = isHebrew
    ? "פרחי נו\"ש - חנות פרחים בנווה שאנן, חיפה. פרחים לכל אירוע, עיצוב אישי, זרים טריים ושירות אישי. התקשרו עכשיו: 04-822-7005"
    : "Nina Flowers in Neve Shaanan, Haifa. Flowers for every occasion, custom floral design, fresh bouquets and personal service. Call now: 04-822-7005";

  const keywords = isHebrew
    ? [
        "פרחים חיפה",
        "פרחים נווה שענן",
        "פרחים נוש",
        "פרחים ישראל",
        "חנות פרחים בחיפה",
        "משלוחי פרחים חיפה",
      ]
    : [
        "flowers haifa",
        "flowers neve shaanan",
        "flowers nush",
        "flowers israel",
        "florist haifa",
      ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        "he-IL": `${siteUrl}/he`,
        "en-IL": `${siteUrl}/en`,
        "x-default": `${siteUrl}/he`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}`,
      siteName: "Nina Flowers",
      locale: isHebrew ? "he_IL" : "en_IL",
      type: "website",
      images: [
        {
          url: `${siteUrl}/branding/banner.png`,
          width: 1024,
          height: 426,
          alt: isHebrew ? "פרחי נו\"ש" : "Nina Flowers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/branding/banner.png`],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const currentLocale = locale as AppLocale;

  setRequestLocale(currentLocale);
  const messages = await getMessages();
  const dir = currentLocale === "he" ? "rtl" : "ltr";

  return (
    <NextIntlClientProvider messages={messages}>
      <div
        lang={currentLocale}
        dir={dir}
        className={currentLocale === "he" ? "locale-he" : "locale-en"}
      >
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
