import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "24/7 Official WhatsApp Customer Desk (+91 8360750829)",
  description: "Connect with verified RAMJI247 customer care on WhatsApp at +91 8360750829 for instant ID creation and 24/7 support.",
  keywords: ["RAMJI247 contact","cricket id customer care","RAMJI247 whatsapp number"],
  alternates: {
    canonical: "https://ramji247id.com/contact",
  },
  openGraph: {
    title: "24/7 Official WhatsApp Customer Desk (+91 8360750829) | RAMJI247",
    description: "Connect with verified RAMJI247 customer care on WhatsApp at +91 8360750829 for instant ID creation and 24/7 support.",
    url: "https://ramji247id.com/contact",
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
    title: "24/7 Official WhatsApp Customer Desk (+91 8360750829) | RAMJI247",
    description: "Connect with verified RAMJI247 customer care on WhatsApp at +91 8360750829 for instant ID creation and 24/7 support.",
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
