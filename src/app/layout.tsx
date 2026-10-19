import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '../styles/viewer.css';

export const metadata: Metadata = {
  title: 'Casa Valle · Plano 3D',
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#203749' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
