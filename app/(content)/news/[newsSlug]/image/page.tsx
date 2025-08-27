import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import type { News } from "@prisma/client";

interface ImagePageProps {
  params: {
    newsSlug: string;
  };
}

export default async function ImagePage({ params }: ImagePageProps) {
  const newsItemSlug = params.newsSlug;
  const newsItem: News | null = await getNewsItem(newsItemSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
