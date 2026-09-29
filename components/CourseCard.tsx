import Image from "next/image";

export type Course = {
  title: string;
  img: string;
  learners: string[];
  author: string;
  rating: number;
  price: string;
  level: string;
  meta: string[];
};

export default function CourseCard({
  course: c,
  imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",
  className = "",
}: {
  course: Course;
  imageSizes?: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-neutral-200 bg-white p-3 text-left text-neutral-900 ${className}`}>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
        <Image src={c.img} alt={c.title} fill sizes={imageSizes} className="object-cover" />
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
    </div>
  );
}
