'use client'

import { ArrowDown, Zap, Shield, TrendingDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            JSON to TOON Converter
            <br />
            <span className="text-primary-200">Reduce LLM Tokens by 30-60%</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-100 text-balance">
            Convert JSON to TOON format instantly. Reduce token usage for GPT-4, Claude, Gemini, and other LLMs.
            <br />
            <span className="text-lg">Free, fast, secure, and 100% client-side.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Zap className="w-5 h-5" />
              <span className="text-sm font-medium">Instant Conversion</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">100% Private</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <TrendingDown className="w-5 h-5" />
              <span className="text-sm font-medium">30-60% Savings</span>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="#converter"
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Start Converting
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

