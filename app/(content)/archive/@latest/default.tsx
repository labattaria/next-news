import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import type { News } from "@prisma/client";

export default async function LatestNewsPage() {
  const latestNews: News[] = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
