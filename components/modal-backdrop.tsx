"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ModalBackdropProps {
  children: ReactNode;
}

export default function ModalBackdrop({ children }: ModalBackdropProps) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.85)] flex justify-center items-center z-10 p-4 overflow-auto">
      <div className="absolute inset-0" onClick={() => router.back()} />

      <div className="relative z-20 w-full max-w-[50rem] p-8 bg-[#bababa] rounded-sm shadow-[0_0_10px_0_#181817] overflow-auto">
        {children}
      </div>
    </div>
  );
}