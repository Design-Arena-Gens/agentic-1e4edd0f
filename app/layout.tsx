import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Website Banane Ka Tarika - Learn Web Development',
  description: 'Learn how to create websites with step-by-step tutorials in Hindi and English',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
