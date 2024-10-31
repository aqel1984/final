import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ClientErrorBoundary } from '@/components/ClientErrorBoundary'
import { ThemeProvider } from '@/context/ThemeContext'
import { LoadingProvider } from '@/context/LoadingContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shea Butter S. Ceathra',
  description: 'Premium shea butter products',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider>
          <LoadingProvider>
            <ClientErrorBoundary>
              <Header />
              <main className="flex-grow" aria-label="Main content">
                {children}
              </main>
              <Footer />
            </ClientErrorBoundary>
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}