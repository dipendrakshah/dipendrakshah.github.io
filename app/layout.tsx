import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";
import { doge } from "./doge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dipendra K. Shah's blog",
  description:
    "Dipendra K. Shah is a software engineer, based in Kathmandu, Nepal.",
  openGraph: {
    title: "Dipendra K. Shahg's blog",
    description:
      "Dipendra K. Shah is a software engineer, based in Kathmandu, Nepal.",
    url: "https://dipendrakshah.com.np",
    siteName: "Dipendra K. Shahg's blog",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@dipendrakshah",
    creator: "@dipendrakshah",
  },
  metadataBase: new URL("https://dipendrakshah.com.np"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();(${doge.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
