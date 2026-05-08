"use client";

import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/" || path === "") {
      window.location.replace("/he");
    }
  }, []);

  return (
    <p style={{ padding: "2rem", textAlign: "center", fontFamily: "system-ui, sans-serif" }}>
      מעבירים לעברית… / Redirecting…
    </p>
  );
}
