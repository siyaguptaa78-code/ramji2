import type { Metadata } from 'next';
import './globals.css';
import { 
  Navbar, 
  Footer, 
  WhatsAppFloatingButton, 
  LiveTicker, 
  JsonLd,
  SITE_CONFIGS 
} from '@ramji/shared';

const config = SITE_CONFIGS.ramji2;

export const metadata: Metadata = {
  metadataBase: new URL('https://ramji247id.com'),
  title: {
    default: "RAMJI247 | India's Most Trusted Online Cricket ID & 60-Second Instant Account Provider",
    template: "%s | RAMJI247",
  },
  description: config.description,
  keywords:   [
      "RAMJI247",
      "RAMJI247 ID",
      "Online Cricket ID",
      "Cricket ID Online",
      "Cricket ID Provider",
      "Online Cricket Account",
      "Cricket ID Registration",
      "Cricket ID WhatsApp Number",
      "Fast Withdrawal Cricket ID",
      "Instant WhatsApp ID"
  ],
  authors: [{ name: config.name }],
  creator: config.name,
  publisher: config.name,
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
    canonical: config.domain,
  },
  verification: {
    google: 'o2Wxi9OCZ-NJPkkJUn7Kr4oZGQXMIxy6o4GEKadQIJg',
  },
  openGraph: {
    title: `${config.name} | Official Sports Exchange & Live Casino ID`,
    description: config.description,
    url: config.domain,
    siteName: config.name,
    images: [
      {
        url: '/images/logo.png',
        width: 1000,
        height: 216,
        alt: `${config.name} Official Brand Logo`,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${config.name} | Instant Cricket ID on WhatsApp`,
    description: config.description,
    images: ['/images/logo.png'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${config.domain}/#website`,
        'url': config.domain,
        'name': config.name,
        'description': config.description,
        'publisher': {
          '@id': `${config.domain}/#organization`
        }
      },
      {
        '@type': 'Organization',
        '@id': `${config.domain}/#organization`,
        'name': config.name,
        'url': config.domain,
        'logo': `${config.domain}/images/logo.png`,
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': `+91-${config.whatsappNumber}`,
          'contactType': 'customer support',
          'availableLanguage': ['English', 'Hindi']
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark">
      <head>
        <JsonLd data={jsonLdData} />
      </head>
      <body className="bg-[#0c0806] text-neutral-100 flex flex-col min-h-screen antialiased selection:bg-amber-500 selection:text-black">
        <LiveTicker />
        <Navbar 
          siteName={config.name} 
          brandNumber={config.brandNumber}
          accentColor="text-amber-400 border-amber-500/30"
          badgeStyle="bg-amber-500/10 text-amber-400"
        />
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer 
          siteName={config.name} 
          brandNumber={config.brandNumber} 
          tagline={config.tagline} 
        />
        <WhatsAppFloatingButton 
          siteName={config.name} 
          customMessage={config.defaultWhatsAppMessage} 
        />
      </body>
    </html>
  );
}

