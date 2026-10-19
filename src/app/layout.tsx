import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../styles/viewer.css';

export const metadata: Metadata = {
  title: 'Casa Valle · Plano 3D',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
