export interface ConverterOptions {
  delimiter?: string
  indentation?: number
  showMarkers?: boolean
  minifyJson?: boolean
}

export class TOONConverter {
  private delimiter: string
  private indentation: number
  private showMarkers: boolean

  constructor(options: ConverterOptions = {}) {
    this.delimiter = options.delimiter || ','
    this.indentation = options.indentation ?? 4
    this.showMarkers = options.showMarkers !== false
  }

  convert(jsonString: string, options?: ConverterOptions): string {
    try {
      // Update options if provided
      if (options) {
        if (options.delimiter !== undefined) this.delimiter = options.delimiter
        if (options.indentation !== undefined) this.indentation = options.indentation
        if (options.showMarkers !== undefined) this.showMarkers = options.showMarkers
      }

      // Minify JSON if requested
      let jsonToConvert = jsonString
      if (options?.minifyJson) {
        jsonToConvert = this.minifyJSON(jsonString)
      }

      // Parse JSON
      const data = JSON.parse(jsonToConvert)

      // Convert to TOON
      const toon = this.objectToTOON(data, 0)

      return toon.trim()
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Invalid JSON: ${error.message}`)
      }
      throw new Error('Invalid JSON format')
    }
  }

  private objectToTOON(obj: unknown, depth: number): string {
    let result = ''
    const indent = ' '.repeat(depth * this.indentation)

    if (Array.isArray(obj)) {
      return this.arrayToTOON(obj, depth)
    }

    if (typeof obj === 'object' && obj !== null) {
      return this.objectToTOONInternal(obj as Record<string, unknown>, depth)
    }

    // Primitive value
    return this.formatValue(obj)
  }

  private arrayToTOON(arr: unknown[], depth: number): string {
    if (arr.length === 0) {
      return ''
    }

    const indent = ' '.repeat(depth * this.indentation)

    // Check if array contains objects
    const isObjectArray =
      arr.length > 0 &&
      arr.every(
        (item) =>
          typeof item === 'object' &&
          item !== null &&
          !Array.isArray(item) &&
          Object.keys(item).length > 0
      )

    if (isObjectArray) {
      // Table format for array of objects
      const firstItem = arr[0] as Record<string, unknown>
      const keys = Object.keys(firstItem)

      let result = ''

      // Header row with marker
      if (this.showMarkers && depth === 0) {
        result += `#${keys.length}\n`
      }

      // Header
      const delimiter = this.delimiter === '\t' ? '\t' : ` ${this.delimiter} `
      result += keys.join(delimiter) + '\n'

      // Data rows
      for (const item of arr) {
        const values = keys.map((key) => {
          const value = (item as Record<string, unknown>)[key]
          return this.formatValue(value)
        })
        result += values.join(delimiter) + '\n'
      }

      return result
    } else {
      // Simple array format
      let result = ''
      for (const item of arr) {
        result += indent + this.formatValue(item) + '\n'
      }
      return result
    }
  }

  private objectToTOONInternal(obj: Record<string, unknown>, depth: number): string {
    let result = ''
    const indent = ' '.repeat(depth * this.indentation)
    const keys = Object.keys(obj)

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const value = obj[key]

      if (Array.isArray(value)) {
        result += indent + key + '\n'
        result += this.arrayToTOON(value, depth + 1)
      } else if (typeof value === 'object' && value !== null) {
        result += indent + key + '\n'
        result += this.objectToTOON(value, depth + 1)
      } else {
        result += indent + key + ' ' + this.formatValue(value) + '\n'
      }
    }

    return result
  }

  private formatValue(value: unknown): string {
    if (value === null) {
      return 'null'
    }
    if (typeof value === 'string') {
      // Escape special characters if needed
      if (value.includes(' ') || value.includes(this.delimiter) || value.includes('\n')) {
        return `"${value.replace(/"/g, '\\"')}"`
      }
      return value
    }
    if (typeof value === 'number') {
      return value.toString()
    }
    if (typeof value === 'boolean') {
      return value.toString()
    }
    return String(value)
  }

  minifyJSON(jsonString: string): string {
    try {
      const parsed = JSON.parse(jsonString)
      return JSON.stringify(parsed)
    } catch {
      return jsonString
    }
  }
}

