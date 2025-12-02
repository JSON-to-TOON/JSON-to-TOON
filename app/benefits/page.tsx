import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Benefits } from '@/components/Benefits'

export const metadata: Metadata = {
  title: 'Why Use TOON Instead of JSON - Benefits & Advantages | JSON to TOON Converter',
  description: 'Discover the benefits of TOON format: 30-60% token reduction, faster processing, universal compatibility, and cost savings for LLM applications.',
  keywords: [
    'TOON format benefits',
    'why use TOON',
    'TOON advantages',
    'TOON vs JSON benefits',
  ],
  alternates: {
    canonical: '/benefits',
  },
}

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumbs items={[{ label: 'Benefits', href: '/benefits' }]} />
      <div className="pt-16">
        <Benefits />
      </div>
      <Footer />
    </div>
  )
}

