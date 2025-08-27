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
        <ul className="flex gap-4 mb-8 m-0 p-0">
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            const isActive =
              (year && !month && link === month) ||
              (!year && link === year) ||
              (year && month && link === month);

            return (
              <li key={link}>
                <Link
                  href={href}
                  className={`font-bold text-[1.25rem] rounded-sm no-underline ${
                    isActive ? "text-[#e5e5e1] hover:text-[#e5e5e1]" : "text-[#b0b0a6] hover:text-[#e5e5e1]"
                  }`}
                >
                  {link}
                </Link>
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

  return <p className="my-4">No news found for the selected period.</p>;
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
      <Suspense fallback={<p className="mb-4">Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
