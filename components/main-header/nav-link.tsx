"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function NavLink({ href, children, className = "" }: NavLinkProps) {
  const path = usePathname();
  const isActive = path?.startsWith(href);

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? "bg-[#bcbcb7] text-[#181817]" : "bg-[#181817] text-[#e5e5e1]" }`}
    >
      {children}
    </Link>
  );
}
