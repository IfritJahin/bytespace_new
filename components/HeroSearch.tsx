"use client";

import { useRouter } from "next/navigation";

// Puts the query in the URL (?q=) so CourseCatalog can filter by it,
// then scrolls down to the results.
export default function HeroSearch() {
  const router = useRouter();

  return (
    <form
      role="search"
      action="/"
      onSubmit={(e) => {
        e.preventDefault();
        const q = new FormData(e.currentTarget).get("q")?.toString().trim() ?? "";
        router.push(q ? `/?q=${encodeURIComponent(q)}` : "/", { scroll: false });
        document.getElementById("discover")?.scrollIntoView({ behavior: "smooth" });
      }}
      className="relative z-10 mt-8 flex w-full max-w-[590px] sm:max-w-[460px] md:max-w-[590px] xl:mt-[100px] items-center gap-3 max-sm:gap-2"
    >
      <label htmlFor="q" className="sr-only">Search courses</label>
      <div className="flex h-[52px] min-w-0 flex-1 items-center gap-3 rounded-full bg-white pl-2 pr-5 shadow-[0_8px_30px_rgba(0,0,0,.12)] max-sm:h-12">
        <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-neutral-100 text-neutral-500">
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
            <circle cx="8.75" cy="8.75" r="5.75" stroke="currentColor" strokeWidth="1.5" />
            <path d="m13 13 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
        <input id="q" name="q" type="search" placeholder="Course, topic, creator" className="min-w-0 flex-1 bg-transparent text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none" />
      </div>
      <button type="submit" className="h-[52px] shrink-0 rounded-full bg-[#D8FF4F] px-7 text-base text-neutral-900 transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white max-sm:h-12 max-sm:px-4 max-sm:text-sm">Search</button>
    </form>
  );
}
