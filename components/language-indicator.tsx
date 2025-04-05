"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"

export function LanguageIndicator({ text }: { text: string }) {
  const [language, setLanguage] = useState<string | null>(null)

  useEffect(() => {
    if (!text.trim()) {
      setLanguage(null)
      return
    }

    // Simple language detection based on character sets
    // This is a basic implementation - the AI will do the real work
    const hasDevanagari = /[\u0900-\u097F]/.test(text)
    const hasCyrillic = /[\u0400-\u04FF]/.test(text)
    const hasArabic = /[\u0600-\u06FF]/.test(text)
    const hasChinese = /[\u4E00-\u9FFF]/.test(text)
    const hasThai = /[\u0E00-\u0E7F]/.test(text)
    const hasLatin = /[a-zA-Z]/.test(text)

    if (hasDevanagari) setLanguage("Hindi/Sanskrit")
    else if (hasCyrillic) setLanguage("Russian/Slavic")
    else if (hasArabic) setLanguage("Arabic/Persian")
    else if (hasChinese) setLanguage("Chinese")
    else if (hasThai) setLanguage("Thai")
    else if (hasLatin) setLanguage("Latin-based")
    else setLanguage("Unknown")
  }, [text])

  if (!language) return null

  return (
    <div className="flex items-center text-xs text-gray-500 mt-2">
      <Globe className="h-3 w-3 mr-1" />
      <span>Detected: {language}</span>
    </div>
  )
}

