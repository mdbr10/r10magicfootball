import type { Metadata } from "next";
import { Anek_Latin } from "next/font/google";
import localFont from "next/font/local";

import Script from "next/script";

const anekLatin = Anek_Latin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-anek-latin",
});

const gazzetta = localFont({
  src: [
    {
      path: "../../fonts/GazzettaFont/Gazzetta-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/GazzettaFont/Gazzetta-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gazzetta",
});

export const metadata: Metadata = {
  title: "Manual do Bruxo",
  description: "Transforme seu sonho em realidade!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script id="script-gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NRX9NDCK');`}}></Script>
      <body className={`${anekLatin.variable} ${gazzetta.variable}`}>
        <noscript dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NRX9NDCK"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
        {children}
      </body>
    </>
  );
}
