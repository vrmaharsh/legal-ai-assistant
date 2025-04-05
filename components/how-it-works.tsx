export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Describe the Scenario",
      description: "Enter a detailed description of the crime or legal situation you want to analyze.",
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our advanced AI processes your description to identify relevant legal sections.",
    },
    {
      number: "03",
      title: "Review Results",
      description: "Get a list of applicable IPC sections with detailed explanations and punishments.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-gray-300 text-4xl font-bold mb-4">{step.number}</div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

