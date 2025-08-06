import Script from "next/script";
import GTM from "@/components/molecules/GTM";
import "./globals.css";
import I18nProvider from "@/i18n/I18nProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <Script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="733b42d7-c7c4-411f-88d8-dc7be367a465"
          data-blockingmode="auto"
          type="text/javascript"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <GTM />
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
