import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/global.css";


export const metadata: Metadata = {
  title: "Map-X",
  description: "Map-X travels networks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
