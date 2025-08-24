import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
import type { News } from "@prisma/client";

export default async function NewsPage() {
  const news: News[] = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
