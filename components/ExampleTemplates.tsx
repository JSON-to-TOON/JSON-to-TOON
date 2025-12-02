'use client'

import { useState } from 'react'
import { FileText, ChevronDown } from 'lucide-react'

const examples = [
  {
    name: 'Simple Object',
    json: JSON.stringify({
      name: 'John Doe',
      age: 30,
      city: 'New York',
      active: true,
    }, null, 2),
  },
  {
    name: 'Nested Object',
    json: JSON.stringify({
      user: {
        id: 1,
        name: 'Jane Smith',
        email: 'jane@example.com',
        settings: {
          theme: 'dark',
          notifications: true,
        },
      },
    }, null, 2),
  },
  {
    name: 'Array of Objects',
    json: JSON.stringify({
      users: [
        { id: 1, name: 'Alice', role: 'admin' },
        { id: 2, name: 'Bob', role: 'user' },
        { id: 3, name: 'Charlie', role: 'user' },
      ],
    }, null, 2),
  },
  {
    name: 'Complex Data',
    json: JSON.stringify({
      api: {
        version: '1.0',
        endpoints: [
          { path: '/users', method: 'GET', auth: true },
          { path: '/posts', method: 'POST', auth: true },
        ],
      },
      metadata: {
        timestamp: '2024-01-01T00:00:00Z',
        total: 2,
      },
    }, null, 2),
  },
  {
    name: 'E-commerce Product',
    json: JSON.stringify({
      product: {
        id: 'prod-123',
        name: 'Laptop',
        price: 999.99,
        inStock: true,
        categories: ['Electronics', 'Computers'],
        reviews: [
          { rating: 5, comment: 'Great product!' },
          { rating: 4, comment: 'Good value' },
        ],
      },
    }, null, 2),
  },
]

interface ExampleTemplatesProps {
  onLoad: (json: string) => void
}

export function ExampleTemplates({ onLoad }: ExampleTemplatesProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
      >
        <FileText className="w-4 h-4" />
        Examples
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-20 max-h-96 overflow-y-auto">
              <div className="p-2">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      onLoad(example.json)
                      setIsOpen(false)
                    }}
                    className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 transition-colors text-sm"
                  >
                    {example.name}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
    </div>
  )
}

