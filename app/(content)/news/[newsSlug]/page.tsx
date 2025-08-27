import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";
import type { News } from "@prisma/client";

interface NewsDetailPageProps {
  params: {
    newsSlug: string;
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const newsSlug = params.newsSlug;
  const newsItem: News | null = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} className="w-28 mb-4 rounded-sm" />
        </Link>
        <h1 className="text-[1.5rem] mt-9 mb-5 mx-0">{newsItem.title}</h1>
        <time dateTime={newsItem.date.toISOString()}>
          {newsItem.date.toDateString()}
        </time>
      </header>
      <p className="my-4">{newsItem.content}</p>
    </article>
  );
}
