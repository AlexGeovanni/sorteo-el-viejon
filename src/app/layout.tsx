import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { cn } from "@/utils/cn";
import Header from "@/components/header";

const monserrat = Montserrat({
  variable: "--font-monserrat",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sorteos-viejon.vercel.app/"),
  title: {
    default: "Sorteos El Viejon",
    template: "%s | Sorteos El Viejon",
  },
  description:
    "Sorteos entre amigos basados en Loteria Nacional con informacion clara de boletos, premios y formas de pago.",
  keywords: [
    "sorteos",
    "boletos",
    "rifas",
    "loteria nacional",
    "premios",
    "mexico",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
 openGraph: {
    title: "Sorteos El Viejon",
    description: "Sorteos entre amigos basados en la Loteria Nacional.",
    url: "/",
    siteName: "Sorteos El Viejon",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorteos El Viejon",
    description: "Sorteos entre amigos basados en la Loteria Nacional.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(monserrat.className, "h-full antialiased")}
    >
      <body className="min-h-full flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-md"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <div id="main-content" className="contents">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
