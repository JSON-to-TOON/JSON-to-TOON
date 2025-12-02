'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Reduce Your LLM Costs?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Start converting your JSON to TOON format today and save 30-60% on token usage.
            <br />
            It's free, fast, and 100% private.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Start Converting Now
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-6 text-sm text-primary-200">
            No signup required • No API keys • No limits
          </p>
        </div>
      </div>
    </section>
  )
}

