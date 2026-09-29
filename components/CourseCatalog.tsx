import Image from "next/image";
import ExploreLearning from "./ExploreLearning";





const tabs = ["Featured", "Most Popular", "Cleaning & Painting", "Marketing", "Wellness", "Social Media", "UI UX Design", "Creative Warning"];

const courses = [
  { title: "Learn Figma from Basics", author: "Jenny Wilson", rating: 4.5, price: "$25", img: "/courses/1.png" },
  { title: "Build Digital Skill", author: "Jenny Wilson", rating: 4.5, price: "$28", img: "/courses/2.png" },
  { title: "the Power of Big Data", author: "Jenny Wilson", rating: 4.5, price: "$38", img: "/courses/3.png" },
  { title: "Balancing Productivity an…", author: "Jenny Wilson", rating: 4.5, price: "$28", img: "/courses/4.png" },
  { title: "Mastering Money Manage…", author: "Jenny Wilson", rating: 4.5, price: "$28", img: "/courses/5.png" },
  { title: "Growing Your Team with…", author: "Jenny Wilson", rating: 4.5, price: "$38", img: "/courses/6.png" },
];

export default function CourseCatalog() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-24">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-bold md:text-4xl">Discover Your Passion, Build Your Skills</h2>
        <p className="mt-4 text-xs text-neutral-500 md:text-sm">
          At Bytespace Courses, we bring you access to a diverse range of learning opportunities across various
          fields. Whether you&apos;re looking to expand your skill set or explore new interests, our courses cater
          to every level.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Course categories">
        {tabs.map((t, i) => (
          <button
            key={t}
            role="tab"
            aria-selected={i === 0}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
              i === 0
                ? "border-[#003BE2] bg-[#003BE2] text-white"
                : "border-neutral-200 text-neutral-600 hover:border-neutral-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <li key={c.title} className="overflow-hidden rounded-2xl border border-neutral-100 shadow-sm">
            <div className="relative h-40 w-full bg-neutral-100">
              <Image src={c.img} alt="" fill className="object-cover" />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold">{c.title}</h3>
                <span className="flex items-center gap-1 text-xs text-neutral-500">★ {c.rating}</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <Image
                        key={i}
                        src={`/avatars/${i}.png`}
                        alt=""
                        width={20}
                        height={20}
                        className="rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-400">by {c.author}</span>
                </div>
                <span className="text-sm font-bold text-[#003BE2]">{c.price}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <ExploreLearning/>
    </section>
  );
}