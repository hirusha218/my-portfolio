import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Chamodya Hirusha - Full-Stack Developer',
  description: 'Full-Stack Developer specializing in React, Node.js, React Native, and AI/ML technologies. Building scalable web and mobile applications.',
  keywords: 'Full-Stack Developer, React, Node.js, React Native, AI/ML, Web Development, Mobile Development',
  authors: [{ name: 'Chamodya Hirusha' }],
  creator: 'Chamodya Hirusha',
  openGraph: {
    title: 'Chamodya Hirusha - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, Node.js, React Native, and AI/ML technologies.',
    url: 'https://hirusha.dev',
    siteName: 'Hirusha Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chamodya Hirusha - Full-Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chamodya Hirusha - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, Node.js, React Native, and AI/ML technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  )
}
