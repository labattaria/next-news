import logo from "@/assets/logo.jpg";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="my-12 mx-auto max-w-[50rem] text-center">
      <img
        src={logo.src}
        alt="A newspaper"
        className="w-32 rounded-full shadow-[0_0_10px_0_#181817] mx-auto"
      />
      <h1 className="mt-12 text-[2.5rem]">A News Site For The Next Generation</h1>
      <p className="my-8 mx-0 text-[#bcbcb7] text-[1.1rem]">
        Next News is here to deliver you all the latest news - concise & unbiased!
      </p>

      <p className="my-8 mx-0 text-[#bcbcb7] text-[1.1rem]">
        NextNews aims to provide you with the latest news in a concise and
        unbiased manner. We strive to deliver the news in a way that is easy to
        understand and to the point. We want to keep you informed without
        overwhelming you with unnecessary information.
      </p>

      <p className="my-8 mx-0 text-[#bcbcb7] text-[1.1rem]">
        We employ a team of dedicated journalists who are committed to delivering
        the news in a fair and unbiased manner. Our team is passionate about
        keeping you informed and up to date with the latest news.
      </p>

      <p>
        <Link
          href="/news"
          className="inline-block mt-8 px-8 py-4 text-[17.6px] bg-[#bcbcb7] text-[#181817] font-bold rounded hover:bg-[#e5e5e1]"
        >
          Read the latest news
        </Link>
      </p>
    </div>
  );
}
