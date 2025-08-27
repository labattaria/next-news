import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import type { News } from "@prisma/client";

export default async function LatestNewsPage() {
  const latestNews: News[] = await getLatestNews();

  return (
    <>
      <h2 className="my-[20px] text-[1.5rem] font-bold">Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
