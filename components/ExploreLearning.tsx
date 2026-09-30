import Image from "next/image";

const categories = [
  { label: "Design", src: "/icon1.png" },
  { label: "Development", src: "/icon2.png" },
  { label: "IT & Software", src: "/icon3.png" },
  { label: "Business", src: "/icon4.png" },
  { label: "Marketing", src: "/icon5.png" },
  { label: "Photography", src: "/icon6.png" },
];

export default function ExploreLearning() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-16 md:px-12 md:pb-24 lg:px-[100px]">
      <div className="mx-auto max-w-[920px] text-center">
        <h2 className="text-2xl font-bold leading-[1.2] text-neutral-900 md:text-[32px]">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-neutral-500 md:text-base">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans
          various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully
          curated categories.
        </p>
      </div>

      {/* Tiles are 167x167 with a 24px radius in the Figma frame */}
      <ul className="mx-auto mt-12 grid max-w-[1122px] grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
        {categories.map((c) => (
          <li key={c.label} className="w-full max-w-[167px]">
            <a
              href="#discover"
              className="flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-3xl border border-neutral-200 bg-white p-3 text-center transition hover:-translate-y-0.5 hover:border-[#D8FF4F] hover:shadow-[0_10px_30px_rgba(16,24,40,.08)]"
            >
              <Image src={c.src} alt="" width={60} height={60} className="h-[60px] w-[60px]" />
              <span className="text-sm font-medium text-neutral-800">{c.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
