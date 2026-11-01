import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "VIP Bonus & Welcome Rewards",
  description: "Claim 100% first deposit bonus and weekly refill rewards on RAMJI247 with zero hidden conditions.",
  keywords: ["RAMJI247 bonus","cricket id welcome bonus","id refill promo"],
  alternates: {
    canonical: "https://ramji247id.com/promotions",
  },
  openGraph: {
    title: "VIP Bonus & Welcome Rewards | RAMJI247",
    description: "Claim 100% first deposit bonus and weekly refill rewards on RAMJI247 with zero hidden conditions.",
    url: "https://ramji247id.com/promotions",
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
    title: "VIP Bonus & Welcome Rewards | RAMJI247",
    description: "Claim 100% first deposit bonus and weekly refill rewards on RAMJI247 with zero hidden conditions.",
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
