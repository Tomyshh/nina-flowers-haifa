import Link from "next/link";

type LanguageToggleProps = {
  locale: "he" | "en";
};

export default function LanguageToggle({ locale }: LanguageToggleProps) {
  const alternateLocale = locale === "he" ? "en" : "he";
  const label = locale === "he" ? "English" : "עברית";

  return (
    <Link
      href={`/${alternateLocale}`}
      className="language-toggle"
      aria-label={locale === "he" ? "Switch language to English" : "החלפת שפה לעברית"}
    >
      {label}
    </Link>
  );
}
