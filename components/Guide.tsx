export function Guide() {
  return (
    <section id="guide" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Guide to TOON Format
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about TOON (Token-Oriented Object Notation) format
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">What is TOON Format?</h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              TOON (Token-Oriented Object Notation) is a compact data serialization format designed specifically 
              for Large Language Models (LLMs). It was created to reduce token usage by 30-60% compared to JSON 
              while maintaining full data fidelity and compatibility.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              TOON achieves token reduction by eliminating redundant punctuation, using whitespace for structure, 
              and representing arrays as compact tables. Despite its compactness, TOON supports all JSON features 
              including nested objects, arrays, and complex data structures.
            </p>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Use TOON Instead of JSON?</h3>
            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Key Benefits</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>30-60% Token Reduction:</strong> Significantly lower token usage means lower API costs</li>
                <li><strong>Faster Processing:</strong> Fewer tokens mean faster LLM response times</li>
                <li><strong>Same Functionality:</strong> Supports all JSON features without data loss</li>
                <li><strong>Universal Compatibility:</strong> Works with all major LLM providers</li>
                <li><strong>Human Readable:</strong> Still easy to read and understand</li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">TOON Syntax</h3>
            
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">Simple Objects</h4>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                <code>{`name John
age 30
city New York`}</code>
              </pre>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">Nested Objects</h4>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                <code>{`user
  name Jane
  email jane@example.com
  settings
    theme dark
    notifications true`}</code>
              </pre>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-gray-900 mb-3">Arrays of Objects</h4>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
                <code>{`#3
id name role
1 Alice admin
2 Bob user
3 Charlie user`}</code>
              </pre>
              <p className="text-gray-600 text-sm mb-6">
                The <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">#3</code> indicates the number of columns. 
                Arrays of objects are represented as tables with headers.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">LLM Prompts</h4>
                <p className="text-gray-700">
                  Include structured data in prompts with 30-60% fewer tokens, reducing costs and improving response times.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Function Calls</h4>
                <p className="text-gray-700">
                  Pass function parameters in TOON format to reduce token usage in function calling scenarios.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">API Responses</h4>
                <p className="text-gray-700">
                  Convert API responses to TOON before sending to LLMs to optimize token usage.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Best Practices</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 text-lg">
              <li><strong>Use for structured data:</strong> TOON works best with structured, repetitive data</li>
              <li><strong>Larger data = more savings:</strong> The larger your JSON, the more tokens you'll save</li>
              <li><strong>Arrays of objects:</strong> TOON is especially efficient for arrays of similar objects</li>
              <li><strong>Test your savings:</strong> Use our converter to see your exact token reduction</li>
              <li><strong>Maintain readability:</strong> TOON is still human-readable, making debugging easier</li>
            </ol>
          </section>
        </div>
      </div>
    </section>
  )
}

