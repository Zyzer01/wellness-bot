import { Inter } from 'next/font/google'
import { ThemeProvider } from '../context/ThemeContext';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wellness AI',
  description: 'WellnessBot is an AI-powered web app designed to help users improve their overall well-being through personalized health and wellness recommendations.',
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
    </ThemeProvider>
  )
}
