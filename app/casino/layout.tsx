import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Live Casino, Teen Patti & Indian Card Games",
  description: "Enjoy live dealer Teen Patti, Andar Bahar, Roulette, and Aviator with 2-minute instant cashouts on RAMJI247.",
  keywords: ["RAMJI247 casino","live teen patti","andar bahar cash","online casino id india"],
  alternates: {
    canonical: "https://ramji247id.com/casino",
  },
  openGraph: {
    title: "Live Casino, Teen Patti & Indian Card Games | RAMJI247",
    description: "Enjoy live dealer Teen Patti, Andar Bahar, Roulette, and Aviator with 2-minute instant cashouts on RAMJI247.",
    url: "https://ramji247id.com/casino",
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
    title: "Live Casino, Teen Patti & Indian Card Games | RAMJI247",
    description: "Enjoy live dealer Teen Patti, Andar Bahar, Roulette, and Aviator with 2-minute instant cashouts on RAMJI247.",
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
