import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";
import { baseMetadata } from "@/lib/seo";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import { BranchProvider } from "@/components/providers/BranchProvider";
import type { Locale } from "@/lib/i18n/locale";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = (headers().get("x-locale") === "kk" ? "kk" : "ru") as Locale;

  return (
    <html lang={locale}>
      <body>
        <BranchProvider>
          <Header />
          <main>{children}</main>
          <Footer locale={locale} />
          <StickyMobileCTA />
        </BranchProvider>
      </body>
    </html>
  );
}
