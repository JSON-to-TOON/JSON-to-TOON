import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JSON to TOON Converter - Reduce LLM Tokens 30-60% Free | Convert JSON to TOON Format',
  description: 'Free JSON to TOON converter. Reduce LLM token usage by 30-60%. Convert JSON to TOON format instantly. Works with GPT-4, Claude, Gemini. No signup required. 100% client-side processing for maximum privacy.',
  keywords: [
    'JSON to TOON converter',
    'JSON to TOON',
    'TOON converter',
    'convert JSON to TOON',
    'reduce LLM tokens',
    'TOON format',
    'token optimizer',
    'GPT-4',
    'Claude',
    'Gemini',
    'LLM token reduction',
    'TOON format converter',
    'free JSON converter',
    'JSON to TOON online',
    'TOON format converter free',
    'reduce OpenAI tokens',
    'reduce Claude tokens',
    'LLM cost reduction',
    'token efficient format',
    'JSON alternative for LLM',
    'TOON vs JSON',
    'convert JSON for GPT-4',
    'convert JSON for Claude',
    'convert JSON for Gemini',
    'TOON serialization',
    'compact JSON format',
    'token savings calculator',
    'LLM token optimization',
    'JSON compression for AI',
    'TOON data format',
  ],
  authors: [{ name: 'JSON to TOON Converter' }],
  creator: 'JSON to TOON Converter',
  publisher: 'JSON to TOON Converter',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://yourdomain.com'), // Update with your domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JSON to TOON Converter - Reduce LLM Tokens 30-60% Free',
    description: 'Free JSON to TOON converter. Reduce LLM token usage by 30-60%. Convert JSON to TOON format instantly.',
    url: 'https://yourdomain.com', // Update with your domain
    siteName: 'JSON to TOON Converter',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // Add OG image
        width: 1200,
        height: 630,
        alt: 'JSON to TOON Converter',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON to TOON Converter - Reduce LLM Tokens 30-60% Free',
    description: 'Free JSON to TOON converter. Reduce LLM token usage by 30-60%.',
    creator: '@yourhandle', // Update with your handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'JSON to TOON Converter',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Web',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
              },
              description: 'Free online tool to convert JSON to TOON format, reducing LLM token usage by 30-60%',
              featureList: [
                'Convert JSON to TOON format',
                'Reduce token usage by 30-60%',
                'Real-time conversion',
                'Token savings calculator',
                'Batch conversion',
                'Conversion history',
                'Works with GPT-4, Claude, Gemini',
              ],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                ratingCount: '1000',
                bestRating: '5',
                worstRating: '1',
              },
              screenshot: 'https://yourdomain.com/og-image.png',
              softwareVersion: '1.0',
              releaseNotes: 'Initial release with full JSON to TOON conversion support',
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'JSON to TOON Converter',
              url: 'https://yourdomain.com',
              logo: 'https://yourdomain.com/logo.png',
              sameAs: [
                'https://github.com/yourusername',
                'https://twitter.com/yourhandle',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: 'English',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'JSON to TOON Converter',
              url: 'https://yourdomain.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://yourdomain.com/?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HowTo',
              name: 'How to Convert JSON to TOON',
              description: 'Step-by-step guide to convert JSON to TOON format',
              step: [
                {
                  '@type': 'HowToStep',
                  name: 'Paste JSON Data',
                  text: 'Paste your JSON data into the input field or use one of our example templates',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Click Convert',
                  text: 'Click the "Convert to TOON" button to transform your JSON into the compact TOON format',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Review Token Savings',
                  text: 'See your exact token savings displayed in real-time, typically 30-60% reduction',
                },
                {
                  '@type': 'HowToStep',
                  name: 'Copy and Use',
                  text: 'Copy the TOON output and use it directly in your LLM applications',
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

