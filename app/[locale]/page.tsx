import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import { routing, type AppLocale } from "@/i18n/routing";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const currentLocale = locale as AppLocale;

  const nav = await getTranslations({ locale: currentLocale, namespace: "nav" });
  const hero = await getTranslations({ locale: currentLocale, namespace: "hero" });
  const about = await getTranslations({ locale: currentLocale, namespace: "about" });
  const gallery = await getTranslations({
    locale: currentLocale,
    namespace: "gallery",
  });
  const contact = await getTranslations({
    locale: currentLocale,
    namespace: "contact",
  });
  const footer = await getTranslations({
    locale: currentLocale,
    namespace: "footer",
  });

  return (
    <div className="site-shell grain-overlay">
      <Navbar
        locale={currentLocale}
        labels={{
          about: nav("about"),
          gallery: nav("gallery"),
          contact: nav("contact"),
          callNow: nav("callNow"),
        }}
      />

      <main>
        <Hero
          locale={currentLocale}
          content={{
            kicker: hero("kicker"),
            title: hero("title"),
            subtitle: hero("subtitle"),
            ctaPrimary: hero("ctaPrimary"),
            ctaSecondary: hero("ctaSecondary"),
          }}
        />
        <About
          content={{
            title: about("title"),
            description: about("description"),
            card1Title: about("card1Title"),
            card1Text: about("card1Text"),
            card2Title: about("card2Title"),
            card2Text: about("card2Text"),
            card3Title: about("card3Title"),
            card3Text: about("card3Text"),
          }}
        />
        <Gallery
          locale={currentLocale}
          content={{
            title: gallery("title"),
            description: gallery("description"),
            openImage: gallery("openImage"),
            close: gallery("close"),
            imageAltPrefix: gallery("imageAltPrefix"),
          }}
        />
        <Contact
          content={{
            title: contact("title"),
            description: contact("description"),
            phoneLabel: contact("phoneLabel"),
            addressLabel: contact("addressLabel"),
            address: contact("address"),
            hoursLabel: contact("hoursLabel"),
            hoursWeek: contact("hoursWeek"),
            hoursFriday: contact("hoursFriday"),
            callButton: contact("callButton"),
            mapTitle: contact("mapTitle"),
          }}
        />
      </main>

      <Footer
        content={{
          quickCall: footer("quickCall"),
          copyright: footer("copyright"),
        }}
      />

      <JsonLd locale={currentLocale} />
    </div>
  );
}
