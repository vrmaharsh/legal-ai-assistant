export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-white mb-4">LegalAI Assistant</h3>
            <p className="text-gray-400 text-sm">
              An AI-powered tool to help understand Indian Penal Code sections and punishments.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>IPC Database</li>
              <li>Legal Glossary</li>
              <li>Case Studies</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} LegalAI Assistant. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: This tool is for educational purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  )
}

