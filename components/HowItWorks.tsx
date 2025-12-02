'use client'

import { FileText, Sparkles, TrendingDown, Copy } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    title: 'Paste Your JSON Data',
    description: 'Copy and paste your JSON data into the input field. You can also use our example templates to try it out with sample data.',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: Sparkles,
    title: 'Click Convert to TOON',
    description: 'Click the "Convert to TOON" button to transform your JSON into the compact TOON format. The conversion happens instantly in your browser.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: TrendingDown,
    title: 'Review Token Savings',
    description: 'See how much you\'ve saved! The tool shows you the exact token reduction, typically 30-60% compared to JSON, with a visual savings display.',
    color: 'bg-success-100 text-success-600',
  },
  {
    icon: Copy,
    title: 'Copy and Use',
    description: 'Copy the TOON output and use it directly in your LLM applications. TOON is fully compatible with GPT-4, Claude, Gemini, and more.',
    color: 'bg-yellow-100 text-yellow-600',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Convert JSON to TOON</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Converting JSON to TOON is simple and takes just seconds. Follow these four easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${step.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

