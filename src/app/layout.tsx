import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Real Talk - GTC',
  description: 'Ask questions, get answers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-sky-200 text-sky-950 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
