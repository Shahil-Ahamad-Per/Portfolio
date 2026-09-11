import type React from "react";
import type { Metadata } from "next";
import {
  Newsreader,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shahilahamad.com.np"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/profile.jpg", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  title: "Shahil Ahamad",
  description:
    "Shahil Ahamad - A passionate Full Stack Developer specializing in modern web technologies",
  openGraph: {
    title: "Shahil Ahamad",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies",
    url: "https://shahil-ahamad.vercel.app",
    siteName: "Shahil Ahamad Portfolio",
    images: [
      {
        url: "/homePage.png",
        width: 1200,
        height: 630,
        alt: "Shahil Ahamad",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahil Ahamad",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies",
    images: ["/homePage.png"],
    creator: "@shahil_ahamad",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:title" content="Shahil Ahamad" />
        <meta
          property="og:description"
          content="Shahil Ahamad a Passionate Web Developer"
        />
        <meta
          property="og:image"
          content="https://www.shahilahamad.com.np/homePage.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shahilahamad.com.np/" />
        <meta
          name="dmca-site-verification"
          content="U1luU3FJZTQ4eHFDUmZaaUdQRVZoa1BVdDNiUU9iamVRSy9BdUNDcm0yQT01"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              var sc_project=13339716;
              var sc_invisible=0;
              var sc_security="a30bafd6";
              var scJsHost = "https://";
              document.write("<sc"+"ript type='text/javascript' src='" + scJsHost+ "statcounter.com/counter/counter.js'></"+"script>");
            `,
          }}
        />
        <noscript>
          <div className="statcounter">
            <a
              title="real time web analytics"
              href="https://statcounter.com/"
              target="_blank"
            >
              <img
                className="statcounter"
                src="https://c.statcounter.com/13339716/0/a30bafd6/0/"
                alt="real time web analytics"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${newsreader.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
