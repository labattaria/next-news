import { prisma } from "./prisma";

export async function getAllNews() {
  const news = await prisma.news.findMany();

  return news;
}

export async function getNewsItem(slug) {
  const newsItem = await prisma.news.findUnique({
    where: { slug },
  });

  return newsItem;
}

export async function getLatestNews() {
  const latestNews = await prisma.news.findMany({
    orderBy: { date: "desc" },
    take: 3,
  });

  return latestNews;
}

export async function getAvailableNewsYears() {
  const years = await prisma.news.findMany({
    select: { date: true },
  });

  const distinctYears = [
    ...new Set(years.map((item) => item.date.getFullYear().toString())),
  ];

  return distinctYears;
}

export async function getAvailableNewsMonths(year) {
  const news = await prisma.news.findMany({
    where: {
      date: {
        gte: new Date(`${year}-01-01`),
        lt: new Date(`${parseInt(year) + 1}-01-01`),
      },
    },
    select: { date: true },
  });

  const months = [
    ...new Set(
      news.map((item) => (item.date.getMonth() + 1).toString().padStart(2, "0"))
    ),
  ];

  return months;
}

export async function getNewsForYear(year) {
  const news = await prisma.news.findMany({
    where: {
      date: {
        gte: new Date(`${year}-01-01`),
        lt: new Date(`${parseInt(year) + 1}-01-01`),
      },
    },
    orderBy: { date: "desc" },
  });

  return news;
}

export async function getNewsForYearAndMonth(year, month) {
  const start = new Date(`${year}-${month}-01`);
  const end = new Date(start);
  end.setMonth(end.getMonth() + 1);

  const news = await prisma.news.findMany({
    where: {
      date: {
        gte: start,
        lt: end,
      },
    },
    orderBy: { date: "desc" },
  });

  return news;
}
