import Image from "next/image";
import Navbar from "./Navbar";
import CourseCatalog from "./CourseCatalog";

const logos = [{src: "/Frame (1).png"}, {src: "/Frame (2).png"}, {src: "/Frame (3).png"}, {src: "/Frame (4).png"}, {src: "/Frame (5).png"}];
// Figma measurements on the 1440px frame. Rendered as n * var(--u), where --u is
// 1px at 1440 and shrinks with the viewport, so the composition keeps the same
// arrangement on every screen instead of being rearranged per breakpoint.
type Ornament = {
  src: string;
  width: number;
  height: number;
  size: number;
  x: { left: number } | { right: number };
  y: { top: number } | { bottom: number };
  className?: string;
};

const u = (n: number) => `calc(${n} * var(--u))`;

// Anchored to the top of the hero and to the viewport edges: both renders are
// cropped flat on one side, so they must bleed off the screen edge even on
// monitors wider than the 1440px frame.
const topOrnaments: Ornament[] = [
  { src: "/colorspring.png", width: 267, height: 387, size: 250, x: { left: -18 }, y: { top: 215 }, className: "max-sm:-translate-x-1/2" },
  { src: "/cyllinder.png", width: 213, height: 372, size: 250, x: { right: -20 }, y: { top: 200 }, className: "max-sm:translate-x-1/2" },
];

// Anchored to the student stage (circle + cards), so they stay around the
// circle however much the headline wraps above it.
const stageOrnaments: Ornament[] = [
  { src: "/spring1.png", width: 177, height: 176, size: 175, x: { left: 184 }, y: { top: -17 }, className: "-rotate-180 max-md:translate-y-[115px]" },
  { src: "/Cone.png", width: 190, height: 189, size: 188, x: { right: 150 }, y: { top: -32 }, className: "max-md:translate-y-[115px]" },
  { src: "/circle.png", width: 346, height: 343, size: 342, x: { left: -9 }, y: { bottom: -2 } },
  { src: "/spring2.png", width: 317, height: 332, size: 330, x: { right: -15 }, y: { bottom: 20 } },
];

function OrnamentLayer({ items, className }: { items: Ornament[]; className: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      {items.map((o) => (
        <Image
          key={o.src}
          src={o.src}
          alt=""
          width={o.width}
          height={o.height}
          sizes="(max-width: 1440px) 25vw, 350px"
          className={`absolute h-auto max-w-none ${o.className ?? ""}`}
          style={{
            width: u(o.size),
            ...("left" in o.x ? { left: u(o.x.left) } : { right: u(o.x.right) }),
            ...("top" in o.y ? { top: u(o.y.top) } : { bottom: u(o.y.bottom) }),
          }}
        />
      ))}
    </div>
  );
}
export default function Hero() {
  return (
    <>
      <section
        id="home"
        // className="relative isolate overflow-hidden bg-[#003BE2] pb-0 text-white"
        className="relative isolate overflow-hidden bg-[#003BE2] pb-0 text-white"
        style={{
          // 1px at the 1440px design width; floor keeps ornaments visible on phones
          ["--u" as string]: "clamp(0.42px, 100vw / 1440, 1px)",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.075) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.075) 1px,transparent 1px)",
          backgroundSize: "calc(66 * var(--u)) calc(66 * var(--u))",
          backgroundPosition: "center top",
        }}
      >
        <Navbar />
        <OrnamentLayer items={topOrnaments} className="inset-0 z-0" />
        {/* 3D ornaments: above the circle and content, natural size, centered on the frame */}
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30 hidden overflow-hidden lg:block"
        >
          <Image
            src="/3d ornament.png"
            alt=""
            width={1719}
            height={803}
            priority
            className="absolute left-1/2 top-[110px] h-auto w-[1719px] max-w-none -translate-x-1/2"
          />
        </div> */}
        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-5 pt-8 text-center sm:px-8 md:pt-10 lg:pt-12 xl:pt-[91px]">
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-30"
          style={{
            width: "1300px",
            height: "803px",
            top: "20px",
            left: "",
          }}
        >
          <Image
            src="/3d ornament.png"
            alt=""
            width={1719}
            height={803}
            priority
            className="absolute h-auto "
          />
        </div> */}
        
          <h1 className="relative z-10 max-w-[760px] text-[38px] font-bold leading-[1.08] sm:text-5xl lg:text-[56px] max-lg:!text-[40px] max-sm:!text-[32px]">
            Get Access to Hundreds<br className="hidden sm:block" /> Courses Available
          </h1>
          <p className="relative z-10 mt-5 max-w-[300px] text-sm sm:max-w-[480px] md:max-w-[540px] lg:max-w-[760px] xl:mt-9 leading-relaxed text-white/85 sm:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
          <form role="search" action="#discover" className="relative z-10 mt-8 flex w-full max-w-[590px] sm:max-w-[460px] md:max-w-[590px] xl:mt-[100px] items-center gap-3 max-sm:gap-2">
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
          <div className="relative mt-5 h-[450px] w-full max-w-[1200px] xl:-mt-5 sm:h-[460px] md:h-[520px] xl:h-[523px]">
            <OrnamentLayer items={stageOrnaments} className="inset-y-0 left-1/2 z-[1] w-screen max-w-[1440px] -translate-x-1/2" />
            <div aria-hidden="true" className="absolute left-1/2 top-[170px] z-0 h-[580px] w-[620px] -translate-x-1/2 rounded-[50%] bg-[#D8FF4F] sm:top-[160px] md:top-36 sm:h-[700px] sm:w-[800px] xl:top-[91px] xl:h-[950px] xl:w-[1140px] max-sm:h-[500px] max-sm:w-[520px]" />
            <Image
              src="/hero-student.png"
              alt="Student learning on a laptop with headphones"
              width={722}
              height={515}
              priority
              sizes="(max-width: 640px) 440px, (max-width: 1024px) 470px, 700px"
              className="absolute bottom-0 left-1/2 z-10 h-auto w-[310px] -translate-x-1/2 object-contain sm:w-[380px] md:w-[500px] xl:left-[calc(50%+55px)] xl:w-[700px] max-sm:left-[55%] max-sm:w-[480px] max-sm:max-w-none"
            />
            <FloatCard className="left-0 top-[150px] w-[206px] md:left-10 xl:left-[278px] xl:top-[143px] max-md:top-5 max-md:w-[180px] max-sm:top-3 max-sm:w-[46%] max-sm:max-w-[165px] max-sm:p-2.5">
              <p className="font-[Satoshi-Bold] text-sm sm:text-base">UI/UX Design</p>
              <p className="mt-1 text-[10px] text-neutral-500 sm:text-xs">200 Courses · 1000+ Students</p>
            </FloatCard>
            <FloatCard className="right-0 top-[160px] w-[232px] p-4 md:right-10 xl:right-[247px] xl:top-[155px] max-md:top-5 max-md:w-[180px] max-md:p-3 max-sm:top-3 max-sm:w-[46%] max-sm:max-w-[165px] max-sm:p-2.5">
              <p className="text-xs text-neutral-500 sm:text-sm">Learning Progress</p>
              <p className="mt-1 font-[Satoshi-Bold] text-2xl sm:text-[32px] sm:leading-tight">55%</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-neutral-200">
                <div className="h-full w-[55%] rounded-full bg-[#D8FF4F]" />
              </div>
            </FloatCard>
            <FloatCard className="bottom-6 left-0 w-[256px] md:bottom-10 md:left-10 xl:bottom-[60px] xl:left-[207px] max-md:w-[210px] max-sm:bottom-3 max-sm:w-[150px] max-sm:p-2.5">
              <p className="font-[Satoshi-Bold] text-sm sm:text-base">Happy Students</p>
              <p className="mt-1 flex items-center gap-1 text-[10px] text-neutral-500 sm:text-xs">
                4.5 (240)
                <span aria-label="4.5 out of 5 stars" className="text-amber-400">★★★★★</span>
              </p>
              <div className="mt-3 flex items-center -space-x-2">
                {[
                  { initials: "AM", color: "bg-[#367A91]" },
                  { initials: "JL", color: "bg-[#C47D5D]" },
                  { initials: "SK", color: "bg-[#6B78AA]" },
                  { initials: "RN", color: "bg-[#8A5A9E]" },
                  { initials: "TE", color: "bg-[#3F8F6B]" },
                ].map(({ initials, color }) => (
                  <span
                    key={initials}
                    className={`grid h-8 w-8 place-items-center rounded-full border-2 border-white text-[9px] font-bold text-white max-sm:h-6 max-sm:w-6 max-sm:text-[7px] ${color}`}
                  >
                    {initials}
                  </span>
                ))}
                <span className="grid h-8 w-10 place-items-center rounded-full border-2 border-white bg-[#D8FF4F] text-[9px] font-bold text-neutral-900 max-sm:h-6 max-sm:w-8 max-sm:text-[7px]">
                  2K+
                </span>
              </div>
            </FloatCard>
          </div>
        </div>
      </section>
      <section
          id="community"
          aria-label="Trusted by"
          className="h-auto min-h-[150px] bg-[#F6F6F8] py-6 md:h-[200px] md:min-h-0 md:py-20"
          >
          <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-4 px-4 md:flex-nowrap md:gap-x-6 lg:gap-x-16 lg:px-6">
            {logos.map((logo, index) => (
              <div key={index} className="shrink-0">
                <Image
                  src={logo.src}
                  alt="logo"
                  width={170}
                  height={41}
                  className="h-auto w-[96px] md:w-[120px] lg:w-[150px] xl:w-[170px]"
                />
              </div>
            ))}
          </div>
      </section>

    </>
  );
}

function FloatCard({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`absolute z-20 rounded-xl bg-white p-3 text-left text-neutral-900 shadow-[0_8px_24px_rgba(0,0,0,.15)] ${className}`}>{children}</div>;
}
