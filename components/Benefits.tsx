'use client'

import { DollarSign, Zap, Shield, Globe, BarChart3, Gift } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'Reduce Costs by 30-60%',
    description: 'TOON format uses significantly fewer tokens than JSON, directly reducing your LLM API costs. Save money on every API call.',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    icon: Zap,
    title: 'Faster Processing',
    description: 'Fewer tokens mean faster response times. Your LLM applications will process TOON data more quickly than JSON.',
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    icon: Shield,
    title: 'Same Functionality',
    description: 'TOON supports nesting, arrays, and all JSON features. It maps cleanly back to JSON without losing any data.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Globe,
    title: 'Universal Compatibility',
    description: 'Works with all major LLMs including GPT-4, Claude, Gemini, Llama, and more. No special configuration needed.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: BarChart3,
    title: 'Better for Large Data',
    description: 'TOON is especially effective for large JSON objects. The larger your data, the more tokens you save.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Gift,
    title: '100% Free Forever',
    description: 'No signup required. No API keys needed. No usage limits. Convert unlimited JSON to TOON completely free.',
    gradient: 'from-rose-500 to-red-600',
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Use TOON Instead of JSON?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            TOON format offers significant advantages for LLM applications while maintaining full compatibility with JSON.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div key={benefit.title} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

