import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - JSON to TOON Converter | Latest Articles & Guides',
  description: 'Read our latest articles about TOON format, LLM token optimization, JSON conversion, and best practices for reducing API costs.',
  keywords: [
    'TOON format blog',
    'LLM token optimization',
    'JSON to TOON articles',
    'LLM cost reduction',
    'TOON format guide',
  ],
  alternates: {
    canonical: '/blog',
  },
}

const blogPosts = [
  {
    slug: 'understanding-toon-format-comprehensive-guide',
    title: 'Understanding TOON Format: A Comprehensive Guide to Reducing LLM Token Usage',
    excerpt: 'Learn everything about TOON (Token-Oriented Object Notation) format, how it works, and why it reduces LLM token usage by 30-60% compared to JSON.',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Guide',
  },
  {
    slug: 'how-toon-reduces-llm-tokens-30-60-percent',
    title: 'How TOON Reduces LLM Token Usage by 30-60%: The Science Behind Token Optimization',
    excerpt: 'Discover the technical reasons why TOON format is so effective at reducing token usage in GPT-4, Claude, Gemini, and other LLMs.',
    date: '2024-12-10',
    readTime: '10 min read',
    category: 'Technical',
  },
  {
    slug: 'json-vs-toon-complete-comparison-llm-applications',
    title: 'JSON vs TOON: Complete Comparison for LLM Applications',
    excerpt: 'A detailed side-by-side comparison of JSON and TOON formats, including performance benchmarks, use cases, and when to use each format.',
    date: '2024-12-05',
    readTime: '12 min read',
    category: 'Comparison',
  },
  {
    slug: 'top-5-use-cases-json-to-toon-conversion',
    title: 'Top 5 Use Cases for JSON to TOON Conversion in AI Applications',
    excerpt: 'Explore real-world scenarios where converting JSON to TOON can significantly benefit your AI applications and reduce costs.',
    date: '2024-12-01',
    readTime: '7 min read',
    category: 'Use Cases',
  },
  {
    slug: 'maximizing-cost-savings-toon-format-reduces-llm-api-expenses',
    title: 'Maximizing Cost Savings: How TOON Format Reduces LLM API Expenses',
    excerpt: 'Learn how TOON format can help you save thousands of dollars on LLM API costs with real case studies and ROI analysis.',
    date: '2024-11-25',
    readTime: '9 min read',
    category: 'Cost Optimization',
  },
]

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'JSON to TOON Converter Blog',
            description: 'Articles about TOON format, LLM token optimization, and JSON conversion',
            url: 'https://yourdomain.com/blog',
          }),
        }}
      />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn about TOON format, LLM token optimization, and best practices for reducing API costs
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

