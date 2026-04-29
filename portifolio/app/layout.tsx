import type { Metadata } from 'next'
import './globals.css'
import { RevealLayout } from '@/components/reveal-layout'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Leon Dev | Sites Profissionais - Desenvolvedor Web',
  description: 'Desenvolvimento de sites de alta conversão que geram resultados reais. Sites estratégicos para empresas que querem vender mais.',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Leon Dev | Sites Profissionais - Desenvolvedor Web',
    description: 'Desenvolvimento de sites de alta conversão que geram resultados reais. Sites estratégicos para empresas que querem vender mais.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Leon Dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leon Dev | Sites Profissionais - Desenvolvedor Web',
    description: 'Desenvolvimento de sites de alta conversão que geram resultados reais. Sites estratégicos para empresas que querem vender mais.',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Leon Dev",
  "description": "Desenvolvimento de sites de alta conversão que geram resultados reais. Sites estratégicos para empresas que querem vender mais.",
  "url": "https://leondev.com",
  "telephone": "+5511999999999",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR"
  },
  "priceRange": "$$",
  "serviceType": "Web Development"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen bg-background">
        <ThemeProvider>
          <RevealLayout>
            {children}
          </RevealLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
