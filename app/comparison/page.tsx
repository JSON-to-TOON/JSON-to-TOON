import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'TOON vs JSON Comparison - Token Savings & Performance | JSON to TOON Converter',
  description: 'Detailed comparison between TOON and JSON formats. See token savings, performance differences, and when to use each format for LLM applications.',
  keywords: [
    'TOON vs JSON',
    'TOON comparison',
    'JSON vs TOON',
    'TOON format comparison',
    'token savings comparison',
    'TOON performance',
  ],
  alternates: {
    canonical: '/comparison',
  },
}

export default function ComparisonPage() {
  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'TOON vs JSON Comparison',
    description: 'Detailed comparison between TOON and JSON formats for LLM applications',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Breadcrumbs items={[{ label: 'Comparison', href: '/comparison' }]} />
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              TOON vs JSON: Complete Comparison
            </h1>
            <p className="text-xl text-gray-600">
              Understand the differences, benefits, and use cases for each format
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Token Usage Comparison</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white rounded-lg shadow">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border p-4 text-left">Data Type</th>
                      <th className="border p-4 text-center">JSON Tokens</th>
                      <th className="border p-4 text-center">TOON Tokens</th>
                      <th className="border p-4 text-center">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-4">Simple Object</td>
                      <td className="border p-4 text-center">~15</td>
                      <td className="border p-4 text-center">~8</td>
                      <td className="border p-4 text-center text-success-600 font-semibold">~47%</td>
                    </tr>
                    <tr>
                      <td className="border p-4">Nested Object</td>
                      <td className="border p-4 text-center">~28</td>
                      <td className="border p-4 text-center">~16</td>
                      <td className="border p-4 text-center text-success-600 font-semibold">~43%</td>
                    </tr>
                    <tr>
                      <td className="border p-4">Array of Objects</td>
                      <td className="border p-4 text-center">~45</td>
                      <td className="border p-4 text-center">~22</td>
                      <td className="border p-4 text-center text-success-600 font-semibold">~51%</td>
                    </tr>
                    <tr>
                      <td className="border p-4">Complex Nested</td>
                      <td className="border p-4 text-center">~100</td>
                      <td className="border p-4 text-center">~45</td>
                      <td className="border p-4 text-center text-success-600 font-semibold">~55%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Feature Comparison</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">JSON</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-success-600 mr-2">✓</span>
                      <span>Standard format, widely supported</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>Higher token usage (30-60% more)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-success-600 mr-2">✓</span>
                      <span>Rich punctuation for clarity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>More expensive for LLM APIs</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">TOON</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-success-600 mr-2">✓</span>
                      <span>30-60% fewer tokens</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-success-600 mr-2">✓</span>
                      <span>Lower API costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-success-600 mr-2">✓</span>
                      <span>Faster LLM processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-success-600 mr-2">✓</span>
                      <span>Still human-readable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Use Each Format</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Use TOON When:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Sending data to LLMs (GPT-4, Claude, Gemini)</li>
                    <li>Token cost is a concern</li>
                    <li>Processing speed matters</li>
                    <li>Working with large structured datasets</li>
                    <li>Data will be processed by AI models</li>
                  </ul>
                </div>
                <div className="bg-gray-50 border-l-4 border-gray-600 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Use JSON When:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Standard API communication</li>
                    <li>Human readability is critical</li>
                    <li>Working with traditional systems</li>
                    <li>Token usage is not a concern</li>
                    <li>Compatibility with existing JSON tools</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12 bg-primary-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Try It Yourself</h2>
              <p className="text-gray-700 mb-6">
                Use our converter to see the exact token savings for your data!
              </p>
              <Link
                href="/"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Convert Your JSON Now
              </Link>
            </section>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}

