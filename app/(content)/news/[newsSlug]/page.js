import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";

export default async function NewsDetailPage({ params }) {
  const newsSlug = params.newsSlug;
  const newsItem = await getNewsItem(newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date.toISOString()}>
          {newsItem.date.toDateString()}
        </time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
