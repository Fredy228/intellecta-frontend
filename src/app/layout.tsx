import "./globals.scss";
import type { Metadata } from "next";
import React from "react";
import { Providers } from "@/components/providers/providers";

export const metadata: Metadata = {
  title: "Intellecta",
  description: "Application for learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
}
