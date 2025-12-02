'use client'

import { TrendingDown, Users, Zap, Shield } from 'lucide-react'

const stats = [
  { icon: TrendingDown, value: '30-60%', label: 'Token Reduction', color: 'text-success-600' },
  { icon: Users, value: '10K+', label: 'Developers Using', color: 'text-primary-600' },
  { icon: Zap, value: '<1s', label: 'Conversion Time', color: 'text-yellow-600' },
  { icon: Shield, value: '100%', label: 'Client-Side Privacy', color: 'text-purple-600' },
]

export function Stats() {
  return (
    <section className="py-12 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3 ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

