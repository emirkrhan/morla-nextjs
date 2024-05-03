import './ui/global.css';
import { dmsans } from './ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmsans.className} antialiased`}>{children}</body>
    </html>
  );
}
