import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <main className="not-found-root">
      <h1>העמוד לא נמצא / Page not found</h1>
      <Link href="/he" className="cta-button cta-primary">
        חזרה לדף הבית
      </Link>
    </main>
  );
}
