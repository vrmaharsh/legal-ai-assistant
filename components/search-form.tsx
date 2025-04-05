"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Loader2, Search } from "lucide-react"
import { analyzeDescription } from "@/lib/actions"
import type { IPCResult } from "@/lib/types"

// Import the LanguageIndicator component
import { LanguageIndicator } from "@/components/language-indicator"

export function SearchForm() {
  const [description, setDescription] = useState("")
  const [results, setResults] = useState<IPCResult[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!description.trim()) return

    setLoading(true)
    setError(null)

    try {
      const data = await analyzeDescription(description)
      setResults(data)
    } catch (err) {
      setError("Failed to analyze the description. Please try again.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Describe the crime scenario in any language (English, Hindi, Tamil, etc.)..."
          className="min-h-[120px] text-base"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* Add the LanguageIndicator component below the Textarea */}
        <LanguageIndicator text={description} />
        <Button
          type="submit"
          className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700"
          disabled={loading || !description.trim()}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Search className="mr-2 h-4 w-4" />
              Analyze Crime Description
            </>
          )}
        </Button>
      </form>

      {error && <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-md">{error}</div>}

      {results && results.length > 0 && (
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-semibold">Relevant IPC Sections</h3>
          {results.map((result, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="bg-gray-100 rounded-md px-3 py-2 text-center sm:text-left">
                  <span className="text-sm text-gray-500">Section</span>
                  <p className="font-bold text-lg">{result.section}</p>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-2">{result.title}</h4>
                  <p className="text-gray-600 mb-4">{result.description}</p>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <span className="text-sm font-medium text-gray-700">Punishment:</span>
                    <p className="text-gray-800">{result.punishment}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {results && results.length === 0 && (
        <div className="mt-8 p-6 bg-gray-50 rounded-md text-center">
          <p className="text-gray-600">No relevant IPC sections found for this description.</p>
          <p className="text-sm mt-2">Try providing more details or a different scenario.</p>
        </div>
      )}
    </div>
  )
}

