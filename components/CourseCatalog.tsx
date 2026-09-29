"use client";

import Image from "next/image";
import { useState } from "react";
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

const courses = [
  { title: "Learn Figma from Basic", img: "/course 1.jpg", learners: ["/p1.png", "/p2.png", "/p3.png", "/p4.png"] },
  { title: "Build Digital Asset", img: "/course2.jpg", learners: ["/p5.png", "/p6.png", "/p7.png", "/p8.png"] },
  { title: "the Power of Big Data", img: "/course3.jpg", learners: ["/p9.png", "/p1.png", "/p5.png", "/p3.png"] },
  { title: "Balancing Productivity and Wellbeing", img: "/course4.jpg", learners: ["/p2.png", "/p6.png", "/p4.png", "/p9.png"] },
  { title: "Mastering Money Management", img: "/course5.jpg", learners: ["/p7.png", "/p3.png", "/p8.png", "/p1.png"] },
  { title: "From Idea to Startup Success", img: "/course6.jpg", learners: ["/p4.png", "/p9.png", "/p2.png", "/p6.png"] },
].map((c) => ({
  ...c,
  author: "pumpsoft studio",
  rating: 4.5,
  price: "$25",
  level: "Beginner",
  meta: ["17 Lessons", "2 hours 16 mins", "59 Comments"],
}));

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

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3 lg:gap-7">
          {courses.map((c) => (
            <li key={c.title} className="rounded-2xl border border-neutral-200 bg-white p-3">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-x-3 bottom-3 flex flex-wrap gap-1.5">
                  {c.meta.map((m) => (
                    <span
                      key={m}
                      className="rounded-full bg-white/70 px-2.5 py-1 text-[10px] text-neutral-700 backdrop-blur-sm sm:text-[11px]"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-1 pt-4 pb-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="truncate text-base font-semibold text-neutral-900" title={c.title}>
                    {c.title}
                  </h3>
                  <span className="flex shrink-0 items-center gap-1 text-sm text-neutral-600">
                    {c.rating} <span aria-hidden="true" className="text-neutral-400">★</span>
                    <span className="sr-only">out of 5 stars</span>
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#003BE2]">by {c.author}</p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1.5 text-[11px] text-neutral-700">
                    <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3 w-3 text-neutral-700" fill="currentColor">
                      <rect x="1" y="7" width="2" height="4" rx=".5" />
                      <rect x="5" y="4" width="2" height="7" rx=".5" />
                      <rect x="9" y="1" width="2" height="10" rx=".5" />
                    </svg>
                    {c.level}
                  </span>
                  <div className="flex items-center -space-x-2" aria-label="20+ learners enrolled">
                    {c.learners.map((src, i) => (
                      <Image
                        key={`${src}-${i}`}
                        src={src}
                        alt=""
                        width={28}
                        height={28}
                        className="h-7 w-7 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                    <span
                      aria-hidden="true"
                      className="grid h-7 w-7 place-items-center rounded-full border-2 border-white bg-[#D8FF4F] text-[9px] font-bold text-neutral-900"
                    >
                      20+
                    </span>
                  </div>
                </div>

                <p className="mt-4 flex items-baseline gap-0.5">
                  <span className="text-lg font-bold text-[#003BE2]">{c.price}</span>
                  <span className="text-[11px] text-neutral-400">/lifetime</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ExploreLearning />
    </section>
  );
}
