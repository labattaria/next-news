import { ReactNode } from "react";

interface NewsDetailLayoutProps {
  modal: ReactNode;
  children: ReactNode;
}

export default function NewsDetailLayout({ modal, children }: NewsDetailLayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
