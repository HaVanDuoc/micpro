import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"], // Regular and Medium
});

export const metadata: Metadata = {
  title: "MicPro",
  description: "Micro website",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${poppins.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <NextUIProvider locale={locale}>
            <NextThemesProvider attribute="class">
              {children}
            </NextThemesProvider>
          </NextUIProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
