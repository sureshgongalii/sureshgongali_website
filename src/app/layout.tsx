import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Suresh Gongali - Next-Gen Data Scientist & AI Engineer',
  description: 'Crafting intelligent solutions with cutting-edge AI, machine learning, and deep learning technologies. Transforming data into actionable insights for the future.',
  keywords: 'data scientist, AI engineer, machine learning, deep learning, artificial intelligence, data analysis, Python, TensorFlow, PyTorch',
  authors: [{ name: 'Suresh Gongali' }],
  creator: 'Suresh Gongali',
  publisher: 'Suresh Gongali',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sureshgongali.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Suresh Gongali - Next-Gen Data Scientist & AI Engineer',
    description: 'Crafting intelligent solutions with cutting-edge AI, machine learning, and deep learning technologies.',
    url: 'https://sureshgongali.com',
    siteName: 'Suresh Gongali Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Suresh Gongali - Data Scientist & AI Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suresh Gongali - Next-Gen Data Scientist & AI Engineer',
    description: 'Crafting intelligent solutions with cutting-edge AI, machine learning, and deep learning technologies.',
    creator: '@sureshgongali',
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
  verification: {
    google: 'your-google-verification-code',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-dark-900 text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}