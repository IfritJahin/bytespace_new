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
  // Catalog tabs this course is listed under
  categories: string[];
};

// Full size matches the Figma catalog card: 373x384, 24px radius, 16px padding,
// 341x195 image. `compact` is the smaller card used inside collages
// (Growth section, auth pages).
const styles = {
  full: {
    card: "rounded-3xl p-4",
    image: "aspect-[341/195]",
    metaRow: "inset-x-3 bottom-3 gap-2",
    meta: "px-3 py-1.5 text-xs",
    body: "pt-5",
    title: "text-lg",
    rating: "text-[17px] text-neutral-500",
    star: "h-5 w-5",
    author: "mt-0.5 text-xs",
    row: "mt-[18px]",
    level: "h-8 gap-2 px-4 text-[13px]",
    avatar: "h-8 w-8",
    count: "h-8 w-8 text-[11px]",
    price: "mt-auto pt-3.5",
    priceValue: "text-xl",
  },
  compact: {
    card: "rounded-2xl p-3",
    image: "aspect-[7/4]",
    metaRow: "inset-x-2 bottom-2 gap-1",
    meta: "px-2 py-1 text-[9px] sm:text-[10px]",
    body: "pt-3",
    title: "text-base",
    rating: "text-sm text-neutral-600",
    star: "h-3.5 w-3.5",
    author: "mt-1 text-xs",
    row: "mt-3",
    level: "gap-1.5 px-3 py-1.5 text-[11px]",
    avatar: "h-7 w-7",
    count: "h-7 w-7 text-[9px]",
    price: "mt-2",
    priceValue: "text-lg",
  },
};

export default function CourseCard({
  course: c,
  imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",
  className = "",
  compact = false,
}: {
  course: Course;
  imageSizes?: string;
  className?: string;
  compact?: boolean;
}) {
  const s = compact ? styles.compact : styles.full;

  return (
    <div className={`flex flex-col border border-neutral-200 bg-white text-left text-neutral-900 ${s.card} ${className}`}>
      <div className={`relative w-full overflow-hidden rounded-xl bg-neutral-100 ${s.image}`}>
        <Image src={c.img} alt={c.title} fill sizes={imageSizes} className="object-cover" />
        <div className={`absolute flex flex-nowrap ${s.metaRow}`}>
          {c.meta.map((m) => (
            <span
              key={m}
              className={`whitespace-nowrap rounded-full bg-white/45 font-[Satoshi-Regular] leading-none text-neutral-700 backdrop-blur-sm ${s.meta}`}
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      <div className={`flex flex-1 flex-col ${s.body}`}>
        <div className="flex items-center justify-between gap-3">
          <h3 className={`truncate font-semibold leading-snug text-neutral-950 ${s.title}`} title={c.title}>
            {c.title}
          </h3>
          <span className={`flex shrink-0 items-center gap-1 font-[Satoshi-Regular] ${s.rating}`}>
            {c.rating}
            <svg aria-hidden="true" viewBox="0 0 20 20" className={`text-neutral-300 ${s.star}`} fill="currentColor">
              <path d="m10 1.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5Z" />
            </svg>
            <span className="sr-only">out of 5 stars</span>
          </span>
        </div>
        <p className={`font-[Poppins] text-neutral-600 ${s.author}`}>
          by <span className="text-[#003BE2]">{c.author}</span>
        </p>

        <div className={`flex items-center gap-3 ${s.row}`}>
          <span className={`flex items-center rounded-full bg-neutral-100 font-[Satoshi-Regular] text-neutral-700 ${s.level}`}>
            <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3 w-3 text-neutral-700" fill="currentColor">
              <rect x="1" y="7" width="2" height="4" rx=".5" />
              <rect x="5" y="4" width="2" height="7" rx=".5" />
              <rect x="9" y="1" width="2" height="10" rx=".5" />
            </svg>
            {c.level}
          </span>
          <div className="flex items-center -space-x-2" aria-label="26+ learners enrolled">
            {c.learners.map((src, i) => (
              <Image
                key={`${src}-${i}`}
                src={src}
                alt=""
                width={32}
                height={32}
                className={`rounded-full border-2 border-white object-cover ${s.avatar}`}
              />
            ))}
            <span
              aria-hidden="true"
              className={`grid place-items-center rounded-full border-2 border-white bg-[#D8FF4F] font-[Satoshi-Medium] text-neutral-900 ${s.count}`}
            >
              26+
            </span>
          </div>
        </div>

        <p className={`flex items-baseline gap-0.5 ${s.price}`}>
          <span className={`font-[Satoshi-Bold] text-[#003BE2] ${s.priceValue}`}>{c.price}</span>
          <span className="text-[11px] text-neutral-600">/lifetime</span>
        </p>
      </div>
    </div>
  );
}
