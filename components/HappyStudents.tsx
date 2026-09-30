import Image from "next/image";

// An avatar is either a photo path or a coloured initials bubble.
export type HappyStudentAvatar = string | { initials: string; color: string };

const defaultAvatars: HappyStudentAvatar[] = ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png", "/p6.png", "/p7.png"];

// Colours only. Kept separate from sizing so any theme works at any size.
const themes = {
  light: {
    card: "bg-white text-neutral-900",
    meta: "text-neutral-500",
    star: "text-[#C8F31D]",
    border: "border-white",
    count: "bg-[#D8FF4F] text-neutral-900",
  },
  lime: {
    card: "bg-[#D8FF4F] text-neutral-900",
    meta: "text-neutral-700",
    star: "text-neutral-900",
    border: "border-[#D8FF4F]",
    count: "bg-neutral-900 text-white",
  },
};

// Spacing/typography only. "fluid" scales with the nearest container
// (cqw units), "sm" is a fixed compact card, "responsive" steps down on mobile.
const sizes = {
  fluid: {
    card: "rounded-[2.7cqw] p-[2.7cqw] shadow-[0_10px_30px_rgba(16,24,40,.12)]",
    title: "text-[2.7cqw] leading-tight",
    meta: "mt-[0.4cqw] gap-[0.8cqw] text-[1.9cqw]",
    rating: "font-semibold text-neutral-900",
    row: "mt-[1.6cqw]",
    avatar: "-mr-[1.4cqw] h-[6.1cqw] w-[6.1cqw] border-[0.35cqw] text-[1.6cqw]",
    count: "h-[6.8cqw] w-[6.8cqw] text-[2.1cqw] font-semibold",
  },
  sm: {
    card: "rounded-2xl p-4 shadow-[0_12px_30px_rgba(0,0,0,.18)]",
    title: "font-[Satoshi-Bold] text-sm",
    meta: "mt-0.5 gap-1 text-[11px]",
    rating: "",
    row: "mt-3",
    avatar: "-mr-2 h-8 w-8 border-2 text-[9px]",
    count: "h-8 w-8 border-2 text-[9px] font-bold",
  },
  responsive: {
    card: "rounded-xl p-3 shadow-[0_8px_24px_rgba(0,0,0,.15)] max-sm:p-2.5",
    title: "font-[Satoshi-Bold] text-sm sm:text-base",
    meta: "mt-1 gap-1 text-[10px] sm:text-xs",
    rating: "",
    row: "mt-3",
    avatar: "-mr-2 h-8 w-8 border-2 text-[9px] max-sm:h-6 max-sm:w-6 max-sm:text-[7px]",
    count: "h-8 w-10 border-2 text-[9px] font-bold max-sm:h-6 max-sm:w-8 max-sm:text-[7px]",
  },
};

type HappyStudentsProps = {
  theme?: keyof typeof themes;
  size?: keyof typeof sizes;
  title?: string;
  rating?: number;
  reviews?: number;
  countLabel?: string;
  avatars?: HappyStudentAvatar[];
  stars?: number;
  // Overrides the theme's star colour, e.g. "text-amber-400".
  starClassName?: string;
  // Positioning and width only (e.g. "absolute top-4 left-4 w-[270px]").
  className?: string;
};

export default function HappyStudents({
  theme = "light",
  size = "fluid",
  title = "Happy Students",
  rating = 4.5,
  reviews = 240,
  countLabel = "2K+",
  avatars = defaultAvatars,
  stars = 1,
  starClassName,
  className = "",
}: HappyStudentsProps) {
  const t = themes[theme];
  const s = sizes[size];

  return (
    <div className={`${t.card} ${s.card} ${className}`}>
      <p className={s.title}>{title}</p>

      <p className={`flex items-center ${s.meta} ${t.meta}`}>
        <span className={s.rating}>{rating}</span>
        <span>({reviews})</span>
        <span aria-label={`${rating} out of 5 stars`} className={starClassName ?? t.star}>
          {"★".repeat(stars)}
        </span>
      </p>

      <div className={`flex items-center ${s.row}`}>
        {avatars.map((avatar) =>
          typeof avatar === "string" ? (
            <Image
              key={avatar}
              src={avatar}
              alt=""
              width={40}
              height={40}
              className={`shrink-0 rounded-full object-cover ${s.avatar} ${t.border}`}
            />
          ) : (
            <span
              key={avatar.initials}
              className={`grid shrink-0 place-items-center rounded-full font-bold text-white ${s.avatar} ${t.border} ${avatar.color}`}
            >
              {avatar.initials}
            </span>
          ),
        )}

        <span className={`grid shrink-0 place-items-center rounded-full ${s.count} ${t.border} ${t.count}`}>
          {countLabel}
        </span>
      </div>
    </div>
  );
}
