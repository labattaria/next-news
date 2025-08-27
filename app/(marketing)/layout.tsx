import "../globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Your daily NextNews",
  description:
    "Your trusted source for the latest updates, exclusive reports, and stories that matter.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="font-merriweather" lang="en">
      <body className="m-0 bg-[#181817] text-[#e5e5e1]">{children}</body>
    </html>
  );
}
