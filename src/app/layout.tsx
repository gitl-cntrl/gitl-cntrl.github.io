import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChallengeF",
  description: "Live playground featuring ChallengeF components with ASCII art and animations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
