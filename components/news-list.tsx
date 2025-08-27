import Link from "next/link";
import type { News } from "@prisma/client";

interface NewsListProps {
  news: News[];
}

export default function NewsList({ news }: NewsListProps) {
  return (
    <ul className="list-none m-0 p-0 grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(15rem,1fr))]">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link
            href={`/news/${newsItem.slug}`}
            className="flex flex-col items-center gap-6 text-[#e5e5e1] no-underline rounded-sm text-[1.2rem] pb-4 hover:bg-[#2d2d2b]">
            <img
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              className="w-full h-56 object-cover rounded-sm"
            />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
