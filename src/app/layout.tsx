// src/app/layout.tsx
import React from 'react';
import "./globals.css"; // グローバルCSSをインポート

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>{children}</div>
  );
}
