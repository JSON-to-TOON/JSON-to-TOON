'use client'

import { Github, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">JSON to TOON</h3>
            <p className="text-sm text-gray-400">
              Free tool to convert JSON to TOON format and reduce LLM token usage by 30-60%.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition-colors">Converter</a></li>
              <li><a href="/benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/comparison" className="hover:text-white transition-colors">TOON vs JSON</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Privacy</h4>
            <p className="text-sm text-gray-400 mb-4">
              All conversions happen in your browser. Your data never leaves your device.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} JSON to TOON Converter. Free tool to reduce LLM token usage.</p>
          <p className="mt-2">All conversions are 100% client-side. No data is sent to any server.</p>
        </div>
      </div>
    </footer>
  )
}

