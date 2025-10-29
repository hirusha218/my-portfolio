import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Providers } from './providers'
import StructuredData from '@/components/StructuredData'
import PerformanceOptimizer from '@/components/PerformanceOptimizer'
import SEOAnalytics from '@/components/SEOAnalytics'

export const metadata: Metadata = {
  title: {
    default: 'Chamodya Hirusha - Full-Stack Developer ',
    template: '%s | Chamodya Hirusha'
  },
  description: 'Experienced Full-Stack Developer specializing in React, Node.js, React Native, and AI/ML technologies. Building scalable web and mobile applications with modern frameworks and cutting-edge solutions.',
  keywords: [
    'Full-Stack Developer',
    'React Developer',
    'Node.js Developer',
    'React Native Developer',
    'AI/ML Engineer',
    'Web Development',
    'Mobile Development',
    'JavaScript Developer',
    'TypeScript Developer',
    'Next.js Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Portfolio',
    'Sri Lanka Developer',
    'Freelance Developer'
  ],
  authors: [{ name: 'Chamodya Hirusha', url: 'https://hirusha.dev' }],
  creator: 'Chamodya Hirusha',
  publisher: 'Chamodya Hirusha',
  metadataBase: new URL('https://hirusha.dev'),
  alternates: {
    canonical: 'https://hirusha.dev',
  },
  openGraph: {
    title: 'Chamodya Hirusha - Full-Stack Developer ',
    description: 'Experienced Full-Stack Developer specializing in React, Node.js, React Native, and AI/ML technologies. Building scalable web and mobile applications.',
    url: 'https://hirusha.dev',
    siteName: 'Chamodya Hirusha Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chamodya Hirusha - Full-Stack Developer Portfolio',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'Sri Lanka',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chamodya Hirusha - Full-Stack Developer ',
    description: 'Experienced Full-Stack Developer specializing in React, Node.js, React Native, and AI/ML technologies.',
    images: ['/og-image.jpg'],
    creator: '@hirusha_dev',
    site: '@hirusha_dev',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData type="Person" />
        <StructuredData type="WebSite" />
        <StructuredData type="WebPage" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </head>
      <body className="font-sans">
        <PerformanceOptimizer />
        <SEOAnalytics />
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
