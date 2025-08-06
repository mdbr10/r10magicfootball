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
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="aa2cd170-6d48-4b19-962e-270c52259b39"
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
