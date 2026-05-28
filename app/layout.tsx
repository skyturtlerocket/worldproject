import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divided Grounds — A Cold War Virtual Tour",
  description:
    "Explore how the Cold War divided ethnicities and communities, starting in Germany. A virtual, look-around tour of the places where the Iron Curtain cut through everyday life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
