import { event } from '@/lib/event';
import '@/styles/globals.scss';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: event.title,
  description: `${event.date}, ${event.location}`,
  icons: [{ rel: 'icon', url: event.logo }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
