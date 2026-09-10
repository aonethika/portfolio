import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avanthika P S — Full-Stack Developer",
  description: "Full-stack developer building reliable products with MERN, Next.js and TypeScript. Explore selected work, experience and projects.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
