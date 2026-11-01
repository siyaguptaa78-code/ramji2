import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sports Betting Exchange & Cricket Odds",
  description: "Explore verified cricket match exchange odds, deep market liquidity, and fast settlement on RAMJI247.",
  keywords: ["RAMJI247 sports","cricket exchange id","match odds online","live sports exchange"],
  alternates: {
    canonical: "https://ramji247id.com/sports",
  },
  openGraph: {
    title: "Sports Betting Exchange & Cricket Odds | RAMJI247",
    description: "Explore verified cricket match exchange odds, deep market liquidity, and fast settlement on RAMJI247.",
    url: "https://ramji247id.com/sports",
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
    title: "Sports Betting Exchange & Cricket Odds | RAMJI247",
    description: "Explore verified cricket match exchange odds, deep market liquidity, and fast settlement on RAMJI247.",
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
