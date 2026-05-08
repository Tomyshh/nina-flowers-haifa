type FooterProps = {
  content: {
    quickCall: string;
    copyright: string;
  };
};

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="footer-root">
      <div className="section-wrap footer-shell">
        <p>{content.copyright}</p>
        <a href="tel:04-822-7005" className="footer-call">
          {content.quickCall}: 04-822-7005
        </a>
      </div>
    </footer>
  );
}
