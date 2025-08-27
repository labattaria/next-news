import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { News } from "@prisma/client";
import { notFound } from "next/navigation";

interface InterceptedImagePageProps {
  params: {
    newsSlug: string;
  };
}

export default async function InterceptedImagePage({ params }: InterceptedImagePageProps) {
  const newsItem: News | null = await getNewsItem(params.newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <ModalBackdrop>
      <div className="flex justify-center">
        <img
          src={`/images/news/${newsItem.image}`}
          alt={newsItem.title}
          className="max-h-[80vh] w-auto object-contain"
        />
      </div>
    </ModalBackdrop>
  );
}
