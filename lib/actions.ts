"use server"

import type { IPCResult } from "./types"
import { GoogleGenerativeAI } from "@google/generative-ai"

export async function analyzeDescription(description: string): Promise<IPCResult[]> {
  try {
    // Initialize the Google Generative AI with your API key
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "")

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" })

    const prompt = `
      Analyze the following crime description and identify the relevant Indian Penal Code (IPC) sections that apply.
      The description may be in any language (English, Hindi, Tamil, Telugu, Bengali, etc.).
      You should understand the content regardless of the language and provide accurate IPC sections.
      
      For each relevant section, provide the section number, title, a brief description, and the punishment.
      Format your response as a JSON array of objects with the following structure:
      [
        {
          "section": "Section number (e.g., '302')",
          "title": "Title of the section",
          "description": "Brief description of the offense",
          "punishment": "Punishment details"
        }
      ]
      
      Crime description: ${description}
      
      Always return your response in English, formatted as a JSON array with no additional text.
      If you cannot understand the language or the description is unclear, return an empty array.
    `

    // Generate content
    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    // Parse the JSON response
    try {
      const results = JSON.parse(text) as IPCResult[]
      return results
    } catch (parseError) {
      console.error("Failed to parse AI response:", parseError)
      console.error("Raw response:", text)
      return []
    }
  } catch (error) {
    console.error("Error analyzing description:", error)
    throw new Error("Failed to analyze the description")
  }
}

