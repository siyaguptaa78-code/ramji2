import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service & User Guidelines",
  description: "Read the official terms of service, informational scope, user eligibility, and governance standards for RAMJI247.",
  keywords: ["RAMJI247 terms","cricket id terms of service"],
  alternates: {
    canonical: "https://ramji247id.com/terms",
  },
  openGraph: {
    title: "Terms of Service & User Guidelines | RAMJI247",
    description: "Read the official terms of service, informational scope, user eligibility, and governance standards for RAMJI247.",
    url: "https://ramji247id.com/terms",
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
    title: "Terms of Service & User Guidelines | RAMJI247",
    description: "Read the official terms of service, informational scope, user eligibility, and governance standards for RAMJI247.",
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
