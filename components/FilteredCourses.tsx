"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { courses } from "@/lib/courses";
import CourseCard from "./CourseCard";

// "Featured" is the default tab and lists every course.
export function filterCourses(category: string, query = "") {
  const needle = query.toLowerCase();
  return courses.filter(
    (c) =>
      (category === "Featured" || c.categories.includes(category)) &&
      [c.title, c.author, c.level].some((field) => field.toLowerCase().includes(needle)),
  );
}

export function CourseGrid({ items }: { items: typeof courses }) {
  return (
    // 3 x 373px cards + 2 x 28px gaps = 1175px at the 1440 design width
    <ul className="mx-auto mt-12 grid max-w-[1175px] grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-7">
      {items.map((c, i) => (
        <li
          key={c.title}
          style={{ animationDelay: `${i * 70}ms` }}
          className="rounded-3xl transition duration-300 motion-safe:animate-fade-up hover:shadow-[0_16px_40px_rgba(16,24,40,.12)] motion-safe:hover:-translate-y-1"
        >
          <CourseCard course={c} className="h-full" />
        </li>
      ))}
    </ul>
  );
}

// Reads ?q= from the Hero search. Render inside <Suspense fallback={<CourseGrid ... />}>
// so the grid is still prerendered.
export default function FilteredCourses({ category, onShowAll }: { category: string; onShowAll: () => void }) {
  const router = useRouter();
  const q = useSearchParams().get("q")?.trim() ?? "";
  const results = filterCourses(category, q);

  return (
    <>
      {q && (
        <p role="status" className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-neutral-600">
          {results.length} {results.length === 1 ? "course" : "courses"} for &ldquo;{q}&rdquo;
          <button
            type="button"
            onClick={() => router.replace("/", { scroll: false })}
            className="text-sm text-[#003BE2] hover:underline"
          >
            Clear search
          </button>
        </p>
      )}
      {results.length > 0 ? (
        // Keyed so the cards animate in again whenever the filter changes.
        <CourseGrid key={`${category}|${q}`} items={results} />
      ) : (
        <div className="mt-12 rounded-2xl border border-dashed border-neutral-300 px-6 py-14 text-center md:mt-16 motion-safe:animate-fade-up">
          <p className="text-base text-neutral-900">
            {q ? "No courses match your search." : `No ${category} courses yet.`}
          </p>
          <p className="mt-2 text-sm text-neutral-500">New courses are added every week. Take a look at our featured ones meanwhile.</p>
          <button
            type="button"
            onClick={() => {
              onShowAll();
              if (q) router.replace("/", { scroll: false });
            }}
            className="mt-6 rounded-full bg-[#D8FF4F] px-6 py-2.5 text-sm text-neutral-900 transition hover:brightness-95"
          >
            Show featured courses
          </button>
        </div>
      )}
    </>
  );
}
