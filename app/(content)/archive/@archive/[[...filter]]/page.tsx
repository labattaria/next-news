import { Suspense } from "react";
import Link from "next/link";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import NewsList from "@/components/news-list";
import type { News } from "@prisma/client";

interface FilterProps {
  year?: string;
  month?: string;
}

async function FilterHeader({ year, month }: FilterProps) {
  const availableYears = await getAvailableNewsYears();
  const availableMonths = year ? await getAvailableNewsMonths(year) : [];

  if (
    (year && !availableYears.includes(year)) ||
    (month && !availableMonths.includes(month))
  ) {
    throw new Error("Invalid filter.");
  }

  let links: string[] = availableYears;

  if (year && !month) {
    links = availableMonths;
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }: FilterProps) {
  let news: News[] | undefined;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  if (news && news.length > 0) {
    return <NewsList news={news} />;
  }

  return <p>No news found for the selected period.</p>;
}

interface FilteredNewsPageProps {
  params: {
      filter?: string[];
  }
}

export default async function FilteredNewsPage({ params }: FilteredNewsPageProps) {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
