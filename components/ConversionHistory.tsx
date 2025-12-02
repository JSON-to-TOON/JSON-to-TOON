'use client'

import { Clock, Trash2, FileText } from 'lucide-react'
import { formatNumber, calculateSavings, estimateTokens } from '@/lib/utils'

interface ConversionItem {
  id: string
  json: string
  toon: string
  timestamp: number
  savings: number
}

interface ConversionHistoryProps {
  history: ConversionItem[]
  onLoad: (item: ConversionItem) => void
  onClear: () => void
}

export function ConversionHistory({ history, onLoad, onClear }: ConversionHistoryProps) {
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const minutes = Math.floor(diff / 60000)
    
    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    return date.toLocaleDateString()
  }

  if (history.length === 0) {
    return (
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-center text-gray-500">
        <FileText className="w-8 h-8 mx-auto mb-2 opacity-50" />
        <p className="text-sm">No conversion history yet</p>
      </div>
    )
  }

  return (
    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
          <Clock className="w-4 h-4" />
          Recent Conversions ({history.length})
        </h3>
        <button
          onClick={onClear}
          className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1"
        >
          <Trash2 className="w-3 h-3" />
          Clear
        </button>
      </div>
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {history.map((item) => {
          const jsonTokens = estimateTokens(item.json)
          const toonTokens = estimateTokens(item.toon)
          return (
            <button
              key={item.id}
              onClick={() => onLoad(item)}
              className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all"
            >
              <div className="flex justify-between items-start mb-1">
                <div className="text-xs text-gray-500">{formatTime(item.timestamp)}</div>
                <div className="text-xs font-semibold text-success-600">
                  -{item.savings}%
                </div>
              </div>
              <div className="text-xs text-gray-600 truncate">
                {item.json.substring(0, 50)}...
              </div>
              <div className="flex gap-4 mt-2 text-xs text-gray-500">
                <span>{formatNumber(jsonTokens)} → {formatNumber(toonTokens)} tokens</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

