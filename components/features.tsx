import { BookOpen, Scale, Search, Globe } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Intelligent Search",
      description: "Our AI analyzes your description to find the most relevant IPC sections.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Comprehensive Database",
      description: "Access the complete Indian Penal Code with detailed explanations.",
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Legal Clarity",
      description: "Understand potential legal consequences with clear punishment details.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multilingual Support",
      description: "Describe crimes in any language - Hindi, Tamil, English, or any other language.",
    },
  ]

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-12">Why Use LegalAI Assistant?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-gray-100 p-4 rounded-full mb-4">{feature.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

