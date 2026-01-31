import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stravon | Ship Your App in 7 Days",
  description: "Production-ready applications delivered in 7 days. Modern tech stack, fixed pricing ₹50k-₹80k. 10x faster than traditional agencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html >
  );
}
