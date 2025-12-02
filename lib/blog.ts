import { blogContent1, blogContent2, blogContent3, blogContent4, blogContent5 } from './blog-content'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  keywords?: string[]
  content: string
}

const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-toon-format-comprehensive-guide',
    title: 'Understanding TOON Format: A Comprehensive Guide to Reducing LLM Token Usage',
    excerpt: 'Learn everything about TOON (Token-Oriented Object Notation) format, how it works, and why it reduces LLM token usage by 30-60% compared to JSON.',
    date: '2024-12-15',
    readTime: '8 min read',
    category: 'Guide',
    keywords: ['TOON format', 'LLM tokens', 'JSON to TOON', 'token optimization'],
    content: blogContent1,
  },
  {
    slug: 'how-toon-reduces-llm-tokens-30-60-percent',
    title: 'How TOON Reduces LLM Token Usage by 30-60%: The Science Behind Token Optimization',
    excerpt: 'Discover the technical reasons why TOON format is so effective at reducing token usage in GPT-4, Claude, Gemini, and other LLMs.',
    date: '2024-12-10',
    readTime: '10 min read',
    category: 'Technical',
    keywords: ['token reduction', 'LLM optimization', 'GPT-4 tokens', 'Claude tokens'],
    content: blogContent2,
  },
  {
    slug: 'json-vs-toon-complete-comparison-llm-applications',
    title: 'JSON vs TOON: Complete Comparison for LLM Applications',
    excerpt: 'A detailed side-by-side comparison of JSON and TOON formats, including performance benchmarks, use cases, and when to use each format.',
    date: '2024-12-05',
    readTime: '12 min read',
    category: 'Comparison',
    keywords: ['JSON vs TOON', 'format comparison', 'LLM data formats'],
    content: blogContent3,
  },
  {
    slug: 'top-5-use-cases-json-to-toon-conversion',
    title: 'Top 5 Use Cases for JSON to TOON Conversion in AI Applications',
    excerpt: 'Explore real-world scenarios where converting JSON to TOON can significantly benefit your AI applications and reduce costs.',
    date: '2024-12-01',
    readTime: '7 min read',
    category: 'Use Cases',
    keywords: ['TOON use cases', 'AI applications', 'LLM use cases'],
    content: blogContent4,
  },
  {
    slug: 'maximizing-cost-savings-toon-format-reduces-llm-api-expenses',
    title: 'Maximizing Cost Savings: How TOON Format Reduces LLM API Expenses',
    excerpt: 'Learn how TOON format can help you save thousands of dollars on LLM API costs with real case studies and ROI analysis.',
    date: '2024-11-25',
    readTime: '9 min read',
    category: 'Cost Optimization',
    keywords: ['LLM cost savings', 'API cost reduction', 'TOON ROI'],
    content: blogContent5,
  },
]

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}
