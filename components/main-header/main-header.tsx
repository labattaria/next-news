import Link from "next/link";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <header className="flex justify-between items-center mb-8">
      <div className="text-2xl rounded-sm">
        <Link
          href="/"
          className="font-inter text-[#e1e1d7] no-underline hover:text-[#e1e1d7]"
        >
          NextNews
        </Link>
      </div>
      <nav>
        <ul className="list-none m-0 p-0 flex gap-8 font-bold">
          <li>
            <NavLink
              href="/news"
              className="no-underline text-[#181817] px-4 py-2 rounded-sm hover:bg-[#bcbcb7] hover:text-[#181817]"
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/archive"
              className="no-underline text-[#181817] px-4 py-2 rounded-sm hover:bg-[#bcbcb7] hover:text-[#181817]"
            >
              Archive
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
