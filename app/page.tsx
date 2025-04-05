import { SearchForm } from "@/components/search-form"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto py-6 px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-gray-800 text-white p-2 rounded-md">
                <span className="font-bold">Legal</span>AI
              </div>
              <h1 className="text-xl font-semibold hidden sm:block">LegalAI Assistant</h1>
            </div>
            <nav>
              <ul className="flex gap-6">
                <li className="text-sm font-medium">Home</li>
                <li className="text-sm font-medium text-gray-500 hover:text-gray-900">About</li>
                <li className="text-sm font-medium text-gray-500 hover:text-gray-900">Resources</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find IPC Sections & Punishments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Describe a crime scenario in any language and our AI will identify relevant Indian Penal Code sections and
              associated punishments.
            </p>
            <SearchForm />
          </div>
        </section>

        <Features />
        <HowItWorks />
      </main>

      <Footer />
    </div>
  )
}

