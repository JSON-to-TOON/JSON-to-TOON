'use client'

import { useEffect } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface StructuredDataProps {
  faqs?: FAQItem[]
}

export function StructuredData({ faqs }: StructuredDataProps) {
  useEffect(() => {
    if (!faqs || faqs.length === 0) return

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'faq-schema'
    script.text = JSON.stringify(faqSchema)
    
    // Remove existing FAQ schema if present
    const existing = document.getElementById('faq-schema')
    if (existing) {
      existing.remove()
    }
    
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById('faq-schema')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [faqs])

  return null
}

