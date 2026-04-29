import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "RUMBO CALAMUCHITA | Cabañas y escapadas en Santa Rosa de Calamuchita",
  description:
    "Descubrí cabañas, naturaleza y experiencias personalizadas en Santa Rosa de Calamuchita, Córdoba.",
  keywords: [
    "cabañas en Calamuchita",
    "cabañas Santa Rosa de Calamuchita",
    "turismo Córdoba",
    "escapadas Córdoba",
    "Valle de Calamuchita"
  ],
  openGraph: {
    title: "RUMBO CALAMUCHITA | Cabañas y escapadas en Santa Rosa de Calamuchita",
    description:
      "Descubrí cabañas, naturaleza y experiencias personalizadas en Santa Rosa de Calamuchita, Córdoba.",
    type: "website",
    locale: "es_AR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className="bg-cream font-sans text-forest-900 antialiased">{children}</body>
    </html>
  );
}
