import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Responsible Gaming & 18+ Player Protection",
  description: "RAMJI247 is strictly committed to safe play, 18+ player age verification, self-exclusion options, and player welfare.",
  keywords: ["RAMJI247 responsible gaming","18+ betting limit","self-exclusion india"],
  alternates: {
    canonical: "https://ramji247id.com/responsible-gaming",
  },
  openGraph: {
    title: "Responsible Gaming & 18+ Player Protection | RAMJI247",
    description: "RAMJI247 is strictly committed to safe play, 18+ player age verification, self-exclusion options, and player welfare.",
    url: "https://ramji247id.com/responsible-gaming",
    siteName: "RAMJI247",
    images: [
      {
        url: '/images/logo.png',
        width: 1000,
        height: 216,
        alt: "RAMJI247 Official Logo",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Responsible Gaming & 18+ Player Protection | RAMJI247",
    description: "RAMJI247 is strictly committed to safe play, 18+ player age verification, self-exclusion options, and player welfare.",
    images: ['/images/logo.png'],
  },
};

export default function SubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
