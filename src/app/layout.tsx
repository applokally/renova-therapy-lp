import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renova Therapy | American Magic",
  description:
    "Landing page oficial do protocolo Renova Therapy da American Magic.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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