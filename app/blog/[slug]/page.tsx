import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog'

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | JSON to TOON Converter Blog`,
    description: post.excerpt,
    keywords: post.keywords || [],
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['JSON to TOON Converter'],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Organization',
      name: 'JSON to TOON Converter',
    },
    publisher: {
      '@type': 'Organization',
      name: 'JSON to TOON Converter',
    },
    datePublished: post.date,
    dateModified: post.date,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Breadcrumbs items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title, href: `/blog/${params.slug}` },
        ]} />
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </header>

          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <article 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </div>

          <div className="mt-12 p-6 bg-primary-50 rounded-xl border border-primary-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Saving Tokens?</h2>
            <p className="text-gray-700 mb-6">
              Try our free JSON to TOON converter and see how much you can save on your LLM API costs.
            </p>
            <Link
              href="/"
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Convert JSON to TOON Now
            </Link>
          </div>
        </article>
        <Footer />
      </div>
    </>
  )
}

