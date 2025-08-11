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
  icons:'/profile.jpg',
  title: "Shahil Ahamad",
  description: "Shahil Ahamad a Passionate WebDeveloper",
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
