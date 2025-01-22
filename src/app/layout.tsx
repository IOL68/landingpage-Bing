import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import Script from 'next/script'
import { siteConfig } from '@/lib/constants/site'
import { Footer } from '@/components/sections/Footer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  keywords: [
    'transcription',
    'academic',
    'research',
    'secure',
    'HIPAA compliant',
    'education',
    'medical transcription',
    'research transcription',
    'secure transcription',
    'academic transcription'
  ],
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
  alternates: {
    canonical: '/',
  },
  authors: [
    {
      name: 'Landmark',
      url: siteConfig.url,
    },
  ],
  creator: 'Landmark',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@landmark',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head />
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-11469527178"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11469527178');
          `}
        </Script>
        {children}
        <Footer />
        <Script 
          id="typeform" 
          strategy="lazyOnload"
          defer
        >
          {`
            (function() { 
              var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm_share", b="https://embed.typeform.com/"; 
              if(!gi.call(d,id)){ 
                js=ce.call(d,"script"); 
                js.id=id; 
                js.src=b+"embed.js"; 
                q=gt.call(d,"script")[0]; 
                q.parentNode.insertBefore(js,q) 
              } 
            })()
          `}
        </Script>
      </body>
    </html>
  )
}
