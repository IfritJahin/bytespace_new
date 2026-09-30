"use client";

import { Suspense, useState } from "react";
import FilteredCourses, { CourseGrid, filterCourses } from "./FilteredCourses";
import ExploreLearning from "./ExploreLearning";

const tabs = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];


export default function CourseCatalog() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section id="discover" className="bg-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24 lg:px-[100px]">
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="mx-auto max-w-[520px] text-3xl font-bold leading-[1.2] text-neutral-900 md:text-[40px]">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-500 md:text-base">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across
            different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Course categories"
          className="-mx-6 mt-8 flex items-center gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:mx-auto sm:mt-10 sm:max-w-[1080px] sm:flex-wrap sm:justify-center sm:gap-x-3 sm:gap-y-4 sm:overflow-visible sm:px-0 sm:pb-0"
        >
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={active === t}
              onClick={() => setActive(t)}
              className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-xs transition sm:text-sm ${
                active === t
                  ? "bg-[#D8FF4F] text-neutral-900"
                  : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
              }`}
            >
              {t}
            </button>
          ))}
          <button type="button" className="shrink-0 whitespace-nowrap px-2 text-xs text-[#003BE2] hover:underline sm:text-sm">
            + More
          </button>
        </div>

        <Suspense fallback={<CourseGrid items={filterCourses(active)} />}>
          <FilteredCourses category={active} onShowAll={() => setActive(tabs[0])} />
        </Suspense>
      </div>

      <ExploreLearning />
    </section>
  );
}
