import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Legal AI Assistant',
  description: 'Your intelligent legal assistant for IPC sections and legal information',
  keywords: ['legal', 'ai', 'ipc', 'law', 'assistant'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
