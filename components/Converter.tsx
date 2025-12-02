'use client'

import { useState, useCallback, useMemo } from 'react'
import { 
  Copy, Download, Trash2, Settings, ChevronDown, 
  ChevronUp, FileText, History, Sparkles 
} from 'lucide-react'
import { TOONConverter } from '@/lib/toon-converter'
import { estimateTokens, calculateSavings, formatNumber, copyToClipboard, downloadFile } from '@/lib/utils'
import { cn } from '@/lib/utils'
import { ExampleTemplates } from './ExampleTemplates'
import { ConversionHistory } from './ConversionHistory'

interface ConversionItem {
  id: string
  json: string
  toon: string
  timestamp: number
  savings: number
}

export function Converter() {
  const [jsonInput, setJsonInput] = useState('')
  const [toonOutput, setToonOutput] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [delimiter, setDelimiter] = useState(',')
  const [indentation, setIndentation] = useState(4)
  const [showMarkers, setShowMarkers] = useState(true)
  const [minifyJson, setMinifyJson] = useState(false)
  const [history, setHistory] = useState<ConversionItem[]>([])
  const [copied, setCopied] = useState(false)

  const converter = useMemo(() => new TOONConverter(), [])

  const jsonTokens = useMemo(() => estimateTokens(jsonInput), [jsonInput])
  const toonTokens = useMemo(() => estimateTokens(toonOutput), [toonOutput])
  const savings = useMemo(
    () => calculateSavings(jsonTokens, toonTokens),
    [jsonTokens, toonTokens]
  )

  const handleConvert = useCallback(() => {
    if (!jsonInput.trim()) {
      setError('Please enter JSON data to convert.')
      return
    }

    try {
      setError(null)
      const toon = converter.convert(jsonInput, {
        delimiter,
        indentation,
        showMarkers,
        minifyJson,
      })
      setToonOutput(toon)

      // Save to history
      const newItem: ConversionItem = {
        id: Date.now().toString(),
        json: jsonInput,
        toon,
        timestamp: Date.now(),
        savings: calculateSavings(estimateTokens(jsonInput), estimateTokens(toon)),
      }
      setHistory((prev) => [newItem, ...prev.slice(0, 9)]) // Keep last 10
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON format')
      setToonOutput('')
    }
  }, [jsonInput, converter, delimiter, indentation, showMarkers, minifyJson])

  const handleCopy = async () => {
    if (!toonOutput) return
    try {
      await copyToClipboard(toonOutput)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      setError('Failed to copy to clipboard')
    }
  }

  const handleDownload = () => {
    if (!toonOutput) return
    downloadFile(toonOutput, 'output.toon', 'text/plain')
  }

  const handleClear = () => {
    setJsonInput('')
    setToonOutput('')
    setError(null)
  }

  const loadExample = (example: string) => {
    setJsonInput(example)
    setError(null)
  }

  const loadFromHistory = (item: ConversionItem) => {
    setJsonInput(item.json)
    setToonOutput(item.toon)
    setShowHistory(false)
  }

  return (
    <section id="converter" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">JSON to TOON Converter</h2>
              <p className="text-gray-600">Convert your JSON data to TOON format instantly</p>
            </div>
            <div className="flex gap-2">
              <ExampleTemplates onLoad={loadExample} />
              <button
                onClick={() => setShowHistory(!showHistory)}
                className={cn(
                  "px-4 py-2 rounded-lg border transition-colors flex items-center gap-2",
                  showHistory
                    ? "bg-primary-50 border-primary-300 text-primary-700"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                )}
              >
                <History className="w-4 h-4" />
                History
              </button>
            </div>
          </div>

          {/* History Panel */}
          {showHistory && (
            <div className="mb-6">
              <ConversionHistory
                history={history}
                onLoad={loadFromHistory}
                onClear={() => setHistory([])}
              />
            </div>
          )}

          {/* Input Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">JSON Input</label>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">
                  {formatNumber(jsonTokens)} tokens
                </span>
                <button
                  onClick={handleClear}
                  className="p-1.5 text-gray-500 hover:text-red-600 transition-colors"
                  title="Clear"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <textarea
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder="Paste your JSON here..."
              className={cn(
                "w-full h-64 p-4 border-2 rounded-lg font-mono text-sm",
                "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent",
                error ? "border-red-300 bg-red-50" : "border-gray-300 bg-white"
              )}
            />
            {error && (
              <p className="mt-2 text-sm text-red-600">
                {error}
              </p>
            )}
          </div>

          {/* Advanced Options */}
          <div className="mb-6">
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
            >
              <Settings className="w-4 h-4" />
              Advanced Options
              {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {showAdvanced && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Delimiter
                    </label>
                    <select
                      value={delimiter}
                      onChange={(e) => setDelimiter(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value=",">Comma (,)</option>
                      <option value="\t">Tab</option>
                      <option value="|">Pipe (|)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Indentation
                    </label>
                    <select
                      value={indentation}
                      onChange={(e) => setIndentation(Number(e.target.value))}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="0">None</option>
                      <option value="2">2 Spaces</option>
                      <option value="4">4 Spaces</option>
                    </select>
                  </div>
                  <div className="flex items-center pt-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={showMarkers}
                        onChange={(e) => setShowMarkers(e.target.checked)}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">Show markers (#)</span>
                    </label>
                  </div>
                  <div className="flex items-center pt-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={minifyJson}
                        onChange={(e) => setMinifyJson(e.target.checked)}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">Minify JSON</span>
                    </label>
                  </div>
                </div>
              )}
          </div>

          {/* Convert Button */}
          <div className="mb-6">
            <button
              onClick={handleConvert}
              className="w-full md:w-auto px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Convert to TOON
            </button>
          </div>

          {/* Output Section */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">TOON Output</label>
              <div className="flex items-center gap-4">
                <div className="text-xs text-gray-500">
                  {formatNumber(toonTokens)} tokens
                  {savings > 0 && (
                    <span className="ml-2 text-success-600 font-semibold">
                      -{savings}%
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={handleCopy}
                    className={cn(
                      "p-2 rounded-lg border transition-colors",
                      copied
                        ? "bg-success-50 border-success-300 text-success-700"
                        : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    )}
                    title="Copy"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleDownload}
                    className="p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <textarea
              value={toonOutput}
              readOnly
              placeholder="TOON format will appear here..."
              className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg font-mono text-sm bg-gray-50 focus:outline-none"
            />
          </div>

          {/* Savings Display */}
          {savings > 0 && (
            <div className="mt-6 p-6 bg-gradient-to-r from-success-500 to-success-600 rounded-lg text-white">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">Token Savings</h3>
                <span className="text-3xl font-bold">{savings}%</span>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="text-sm opacity-90">JSON Tokens</div>
                  <div className="text-2xl font-bold">{formatNumber(jsonTokens)}</div>
                </div>
                <div>
                  <div className="text-sm opacity-90">TOON Tokens</div>
                  <div className="text-2xl font-bold">{formatNumber(toonTokens)}</div>
                </div>
                <div>
                  <div className="text-sm opacity-90">Saved</div>
                  <div className="text-2xl font-bold">
                    {formatNumber(jsonTokens - toonTokens)}
                  </div>
                </div>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-500"
                  style={{ width: `${savings}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

