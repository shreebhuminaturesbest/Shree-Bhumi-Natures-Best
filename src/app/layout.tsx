import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Srinikia Exports | Premium Indian Agricultural Products Exporter',
  description: 'Srinikia Exports - Leading global exporter of authentic Indian spices, fresh vegetables, premium grains, and fresh fruits. Delivering quality produce to worldwide markets.',
  keywords: 'Indian exports, spices, vegetables, grains, fruits, agricultural products, international trade',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
