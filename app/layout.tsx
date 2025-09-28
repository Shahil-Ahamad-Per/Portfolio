import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  icons: '/profile.jpg',
  title: "Shahil Ahamad | Full Stack Developer",
  description: "Shahil Ahamad - A passionate Full Stack Developer specializing in modern web technologies",
  openGraph: {
    title: "Shahil Ahamad | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies",
    url: 'https://shahil-ahamad.vercel.app',
    siteName: 'Shahil Ahamad Portfolio',
    images: [
      {
        url: '/homePage.png', // Using your existing homepage image
        width: 1200,
        height: 630,
        alt: 'Shahil Ahamad Portfolio',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shahil Ahamad | Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies',
    images: ['/homePage.png'],
    creator: '@shahil_ahamad',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta property="og:title" content="Shahil Ahamad" />
        <meta property="og:description" content="Shahil Ahamad a Passionate WebDeveloper" />
        <meta property="og:image" content="https://www.shahilahamad.com.np/homePage.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.shahilahamad.com.np/" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
