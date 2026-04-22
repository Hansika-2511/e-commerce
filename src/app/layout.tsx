import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'SweetNight — Premium Nightwear',
  description:
    'India\'s premium nightwear manufacturer based in Mumbai since 2011. Shop women\'s, men\'s, kids\', and licensed Disney & Marvel collections.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
