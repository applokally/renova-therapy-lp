import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://renova.americanmagichair.com.br"),
  title: "Renova Therapy | American Magic",
  description: "Protocolo Renova Therapy da American Magic.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Renova Therapy | American Magic",
    description: "Protocolo Renova Therapy da American Magic.",
    url: "https://renova.americanmagichair.com.br",
    siteName: "Renova Therapy | American Magic",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Renova Therapy | American Magic",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Renova Therapy | American Magic",
    description: "Protocolo Renova Therapy da American Magic.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}