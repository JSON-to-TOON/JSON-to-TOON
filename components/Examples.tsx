'use client'

import { useState } from 'react'
import { Code2, TrendingDown } from 'lucide-react'

const examples = [
  {
    name: 'Simple Object',
    json: `{
  "name": "John",
  "age": 30,
  "city": "New York"
}`,
    toon: `name John
age 30
city New York`,
    jsonTokens: 15,
    toonTokens: 8,
    savings: 47,
  },
  {
    name: 'Nested Object',
    json: `{
  "user": {
    "name": "Jane",
    "email": "jane@example.com"
  },
  "settings": {
    "theme": "dark"
  }
}`,
    toon: `user
  name Jane
  email jane@example.com
settings
  theme dark`,
    jsonTokens: 28,
    toonTokens: 16,
    savings: 43,
  },
  {
    name: 'Array',
    json: `{
  "items": ["apple", "banana", "orange"]
}`,
    toon: `items
  apple
  banana
  orange`,
    jsonTokens: 12,
    toonTokens: 7,
    savings: 42,
  },
  {
    name: 'Complex Data',
    json: `{
  "users": [
    {
      "id": 1,
      "name": "Alice",
      "role": "admin"
    },
    {
      "id": 2,
      "name": "Bob",
      "role": "user"
    }
  ]
}`,
    toon: `#3
id name role
1 Alice admin
2 Bob user`,
    jsonTokens: 45,
    toonTokens: 22,
    savings: 51,
  },
]

export function Examples() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="examples" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">TOON Format Examples</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how TOON format compares to JSON with real examples and token savings.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {examples.map((example, index) => (
              <button
                key={example.name}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === index
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {example.name}
              </button>
            ))}
          </div>

          {/* Example Content */}
          {examples.map((example, index) => {
            if (activeTab !== index) return null
            return (
              <div
                key={example.name}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* JSON Side */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Code2 className="w-5 h-5 text-gray-600" />
                        <h3 className="font-semibold text-gray-900">JSON</h3>
                        <span className="ml-auto text-sm text-gray-500">
                          {example.jsonTokens} tokens
                        </span>
                      </div>
                      <pre className="bg-white p-4 rounded-lg border border-gray-200 overflow-x-auto text-sm">
                        <code>{example.json}</code>
                      </pre>
                    </div>

                    {/* TOON Side */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingDown className="w-5 h-5 text-success-600" />
                        <h3 className="font-semibold text-gray-900">TOON</h3>
                        <span className="ml-auto text-sm text-success-600 font-semibold">
                          {example.toonTokens} tokens
                        </span>
                      </div>
                      <pre className="bg-white p-4 rounded-lg border border-gray-200 overflow-x-auto text-sm">
                        <code>{example.toon}</code>
                      </pre>
                    </div>
                  </div>

                  {/* Savings Badge */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 bg-success-100 text-success-700 px-6 py-3 rounded-full">
                      <TrendingDown className="w-5 h-5" />
                      <span className="font-bold text-lg">Save {example.savings}% tokens</span>
                    </div>
                  </div>
                </div>
              )
          })}
        </div>
      </div>
    </section>
  )
}

