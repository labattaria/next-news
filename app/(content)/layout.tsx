import "../globals.css";
import MainHeader from "@/components/main-header/main-header";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="font-merriweather" lang="en">
      <body className="m-0 bg-[#181817] text-[#e5e5e1]">
        <div className="w-[90%] max-w-[60rem] my-8 mx-auto">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
