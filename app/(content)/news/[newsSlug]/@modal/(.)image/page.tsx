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
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={736}
          />
        </div>
      </dialog>
    </>
  );
}
