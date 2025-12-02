'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { StructuredData } from './StructuredData'

const faqs = [
  {
    question: 'What is TOON format?',
    answer: 'TOON (Token-Oriented Object Notation) is a compact data format designed specifically for LLMs. It reduces token usage by 30-60% compared to JSON while maintaining the same functionality. TOON uses minimal punctuation, represents arrays as tables with headers, and eliminates redundant syntax.',
  },
  {
    question: 'How much can I save with TOON?',
    answer: 'TOON typically reduces token usage by 30-60% compared to JSON. The exact savings depend on your data structure. Simple objects save around 30-40%, while complex nested structures with arrays can save 50-60%. Use our converter to see your exact savings!',
  },
  {
    question: 'Is TOON compatible with all LLMs?',
    answer: 'Yes! TOON works with all major LLM providers including OpenAI (GPT-4, GPT-3.5), Anthropic (Claude), Google (Gemini), Meta (Llama), and more. Since TOON is text-based, it\'s compatible with any LLM that can process text input.',
  },
  {
    question: 'Is my data safe when using this converter?',
    answer: 'Absolutely! All conversion happens entirely in your browser using JavaScript. We never send your data to any server. Your JSON data never leaves your device, ensuring complete privacy and security.',
  },
  {
    question: 'What\'s the difference between TOON and JSON?',
    answer: 'TOON uses a more compact syntax designed for token efficiency. While JSON uses braces, brackets, quotes, and commas, TOON uses minimal punctuation, represents arrays as tables with headers, and eliminates redundant syntax. TOON still supports nesting, lists, and maps cleanly back to JSON without losing data.',
  },
  {
    question: 'How do I convert JSON to TOON?',
    answer: 'It\'s simple! Just paste your JSON data into the input field, click "Convert to TOON", and copy the output. The conversion happens instantly in your browser. You can also use our advanced options to customize the output format.',
  },
  {
    question: 'Can I convert TOON back to JSON?',
    answer: 'Yes! TOON can be converted back to JSON without any data loss. The format is designed to be bidirectional. However, this converter currently focuses on JSON to TOON conversion. TOON to JSON conversion may be added in a future update.',
  },
  {
    question: 'What types of data work best with TOON?',
    answer: 'TOON works best with structured data like configuration files, API responses, database records, and nested objects. It\'s especially effective for data sent to LLMs in prompts, function calls, or system messages. The more structured and repetitive your data, the more tokens you\'ll save.',
  },
  {
    question: 'Does TOON support nested objects and arrays?',
    answer: 'Yes! TOON fully supports nested objects and arrays. Nested objects use indentation to show hierarchy, and arrays are represented as tables with headers. All JSON structures can be converted to TOON while maintaining their structure and data.',
  },
  {
    question: 'Is TOON free to use?',
    answer: 'Yes, TOON is completely free to use! This converter is also free with no signup required, no API keys needed, and no usage limits. Convert as much JSON to TOON as you need, whenever you need it.',
  },
  {
    question: 'Which LLM providers support TOON format?',
    answer: 'All LLM providers support TOON because it\'s text-based. TOON works with OpenAI (GPT-4, GPT-3.5), Anthropic (Claude), Google (Gemini), Meta (Llama), Cohere, and any other text-based LLM. You can use TOON in prompts, function calls, or any text input to an LLM.',
  },
  {
    question: 'How does TOON reduce tokens?',
    answer: 'TOON reduces tokens by eliminating redundant punctuation (quotes, braces, brackets, commas), using whitespace and indentation for structure, representing arrays as compact tables, and removing unnecessary syntax. This results in 30-60% fewer tokens while maintaining full data fidelity.',
  },
  {
    question: 'Can I use TOON with ChatGPT API?',
    answer: 'Yes! TOON works perfectly with the ChatGPT API (GPT-4, GPT-3.5). You can use TOON format in system messages, user messages, function calls, or any text input. Since TOON is just text, it\'s fully compatible with all OpenAI API endpoints.',
  },
  {
    question: 'What file extension does TOON use?',
    answer: 'TOON files typically use the `.toon` extension, though you can use any text-based extension. Since TOON is plain text, it can be saved as `.txt`, `.toon`, or any other text format. The format itself is what matters, not the file extension.',
  },
  {
    question: 'How do I integrate TOON into my application?',
    answer: 'You can integrate TOON by converting your JSON data to TOON format before sending it to LLMs. Use this converter for one-off conversions, or implement the conversion logic in your application. The TOON format is simple enough to implement in any programming language.',
  },
  {
    question: 'Does TOON work with streaming responses?',
    answer: 'Yes! TOON works with streaming responses just like JSON. Since TOON is text-based, it can be streamed from LLMs and processed incrementally. The format is designed to be human-readable even when streamed.',
  },
  {
    question: 'What\'s the maximum file size for conversion?',
    answer: 'Since conversion happens in your browser, the limit depends on your device\'s memory. For most modern browsers, you can convert JSON files up to several megabytes. For very large files (10MB+), consider processing them in chunks or using a server-side solution.',
  },
  {
    question: 'Can I use TOON for API responses?',
    answer: 'Absolutely! TOON is perfect for API responses that will be sent to LLMs. Convert your API\'s JSON responses to TOON format before including them in LLM prompts to reduce token usage and costs. This is one of the most common use cases for TOON.',
  },
  {
    question: 'Is there a TOON specification or standard?',
    answer: 'TOON is a relatively new format designed specifically for LLM token efficiency. While there isn\'t an official standard yet, the format is simple and consistent. This converter follows the most common TOON conventions used in the LLM community.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <StructuredData faqs={faqs} />
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about TOON format and our converter.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-gray-500 flex-shrink-0 transition-transform',
                      isOpen && 'rotate-180'
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="overflow-hidden transition-all duration-300">
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

