import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Converter } from '@/components/Converter'
import { Stats } from '@/components/Stats'
import { Guide } from '@/components/Guide'
import { FAQ } from '@/components/FAQ'
import { CTA } from '@/components/CTA'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JSON to TOON Converter - Reduce LLM Tokens 30-60% Free | Convert JSON to TOON Format',
  description: 'Free JSON to TOON converter. Reduce LLM token usage by 30-60%. Convert JSON to TOON format instantly. Works with GPT-4, Claude, Gemini. No signup required. 100% client-side processing for maximum privacy.',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Converter />
      <Guide />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
