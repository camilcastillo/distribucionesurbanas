import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Distribuciones Urbanas | Logística y Distribución Profesional",
  description:
    "Soluciones integrales de logística, distribución, preparado de pedidos y almacenamiento para optimizar tu cadena de suministro.",
  keywords: "logística, distribución, almacenamiento, cadena de suministro, transporte, pedidos",
  authors: [{ name: "Distribuciones Urbanas" }],
  openGraph: {
    title: "Distribuciones Urbanas | Logística y Distribución",
    description: "Soluciones integrales de logística y distribución para empresas.",
    type: "website",
    url: "https://distribucionesurbanas.com",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Distribuciones Urbanas - Logística y Distribución",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Distribuciones Urbanas | Logística y Distribución",
    description: "Soluciones integrales de logística y distribución para empresas.",
    images: ["/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://distribucionesurbanas.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <meta name="theme-color" content="#ABE13C" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Distribuciones Urbanas",
              url: "https://distribucionesurbanas.com",
              logo: "https://distribucionesurbanas.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "111111111",
                contactType: "customer service",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av. Principal 1234",
                addressLocality: "Ciudad",
                addressCountry: "ES",
              },
              sameAs: [
                "https://www.facebook.com/distribucionesurbanas",
                "https://www.instagram.com/distribucionesurbanas",
                "https://www.linkedin.com/company/distribucionesurbanas",
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
