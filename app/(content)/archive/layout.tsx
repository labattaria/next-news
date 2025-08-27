import type { ReactNode } from "react";

interface ArchiveLayoutProps {
  archive: ReactNode;
  latest: ReactNode;
}

export default function ArchiveLayout({ archive, latest }: ArchiveLayoutProps) {
  return (
    <div>
      <h1 className="my-[21.44px] text-[2rem]">News Archive</h1>
      <section className="mb-8 pb-8 border-b-2 border-[#b0b0a6]">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
