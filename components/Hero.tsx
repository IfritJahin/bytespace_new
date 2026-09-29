import Image from "next/image";
import Navbar from "./Navbar";
import CourseCatalog from "./CourseCatalog";

const logos = [{src: "/Frame (1).png"}, {src: "/Frame (2).png"}, {src: "/Frame (3).png"}, {src: "/Frame (4).png"}, {src: "/Frame (5).png"}];
const ornaments = [
  {
    src: "/colorspring.png",
    width: 200,
    height: 200,
    className: "left-[-18px] top-[100px] w-[250px] max-lg:left-[-60px] max-lg:w-[180px] max-sm:left-[-72px] max-sm:w-[135px]",
  },
  {
    src: "/spring1.png",
    width: 175,
    height: 175,
    className: "left-[264px] top-[300px] w-[175px] -rotate-180 max-lg:left-[70px] max-lg:top-[380px] max-lg:w-[130px] max-sm:hidden",
  },
  {
    src: "/spring2.png",
    width: 330,
    height: 330,
    className: "right-[80px] top-[500px] w-[330px] max-lg:right-[-50px] max-lg:top-[560px] max-lg:w-[220px] max-sm:hidden",
  },
  {
    src: "/Cone.png",
    width: 188,
    height: 188,
    className: "right-[250px] top-[293px] w-[188px] max-lg:right-[-20px] max-lg:top-[350px] max-lg:w-[145px] max-sm:right-[-40px] max-sm:top-[330px] max-sm:w-[115px]",
  },
  {
    src: "/circle.png",
    width: 342,
    height: 342,
    className: "left-[112px] top-[500px] w-[342px] max-lg:left-[-70px] max-lg:top-[560px] max-lg:w-[260px] max-sm:left-[-105px] max-sm:top-[530px] max-sm:w-[210px]",
  },
  {
    src: "/cyllinder.png",
    width: 370,
    height: 370,
    className: "right-[-20px] top-[100px] w-[250px] max-lg:right-[-80px] max-lg:top-[90px] max-lg:w-[190px] max-sm:right-[-105px] max-sm:top-[85px] max-sm:w-[145px]",
  },
];
export default function Hero() {
  return (
    <>
      <section
        id="home"
        // className="relative isolate overflow-hidden bg-[#003BE2] pb-0 text-white"
        className="relative isolate overflow-hidden bg-[#003BE2] pb-0 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.075) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.075) 1px,transparent 1px)",
          backgroundSize: "66px 66px",
        }}
      >
        <Navbar />
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
        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-5 pt-8 text-center sm:px-8 md:pt-10 lg:pt-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1]"
        >
          {ornaments.map((ornament) => (
            <Image
              key={ornament.src}
              src={ornament.src}
              alt=""
              width={ornament.width}
              height={ornament.height}
              className={`absolute h-auto ${ornament.className}`}
            />
          ))}
        </div>
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
          <p className="relative z-10 mt-4 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
          <form role="search" action="#discover" className="relative z-10 mt-6 flex h-12 w-full max-w-[460px] items-center gap-2 rounded-full bg-white p-1.5 pl-4 shadow-[0_8px_30px_rgba(0,0,0,.12)]">
            <label htmlFor="q" className="sr-only">Search courses</label>
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-neutral-400">
              <circle cx="8.75" cy="8.75" r="5.75" stroke="currentColor" strokeWidth="1.5" />
              <path d="m13 13 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input id="q" name="q" type="search" placeholder="Course, topic, creator" className="min-w-0 flex-1 bg-transparent text-xs text-neutral-800 placeholder:text-neutral-400 focus:outline-none" />
            <button type="submit" className="h-9 rounded-full bg-[#D8FF4F] px-5 text-xs font-semibold text-neutral-900 transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2]">Search</button>
          </form>
          <div className="relative mt-5 h-[350px] w-full max-w-[1000px] sm:h-[410px] md:h-[500px]">
            <div aria-hidden="true" className="absolute left-1/2 top-32 z-0 h-[580px] w-[620px] -translate-x-1/2 rounded-[50%] bg-[#D8FF4F] sm:top-36 sm:h-[700px] sm:w-[760px] lg:top-40 lg:h-[850px] lg:w-[900px] max-sm:h-[500px] max-sm:w-[520px]" />
              <Image
              src="/hero-student.png"
              alt="Student learning on a laptop with headphones"
              width={578}
              height={541}
              priority
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 578px"
              className="absolute bottom-0 left-[54%] z-10 h-auto w-[310px] -translate-x-1/2 object-contain sm:w-[390px] md:w-[470px] lg:w-[578px] max-lg:left-1/2 max-sm:w-[82vw] max-sm:max-w-[310px]"
              />
            <FloatCard className="left-0 top-[180px] sm:left-5 md:left-12 lg:left-[260px] max-sm:top-5 max-sm:max-w-[135px]">
              <p className="text-[11px] font-semibold sm:text-xs">UI/UX Design</p>
              <p className="mt-1 text-[9px] text-neutral-400 sm:text-[10px]">200 Courses · 1000+ Students</p>
            </FloatCard>
            <FloatCard className="right-0 top-[200px] sm:right-5 md:right-12 lg:right-[260px] max-sm:top-5">
              <p className="text-[9px] text-neutral-500 sm:text-[10px]">Learning Progress</p>
              <p className="mt-0.5 text-xl font-bold sm:text-2xl">55%</p>
              <div className="mt-1 h-1 w-full rounded-full bg-neutral-200">
                <div className="h-full w-[55%] rounded-full bg-[#D8FF4F]" />
              </div>
            </FloatCard>
            <FloatCard className="bottom-7 left-0 sm:bottom-10 sm:left-5 md:left-12 lg:left-[200px]">
              <p className="text-[10px] font-semibold sm:text-[11px]">Happy Students</p>
              <p className="mt-1 text-[9px] text-neutral-400">4.5 (240) <span aria-label="stars" className="text-amber-400">★★★★★</span></p>
              <div className="mt-2 flex items-center -space-x-1.5">
                {["AM", "JL", "SK"].map((initials, index) => (
                  <span
                    key={initials}
                    className={`grid h-6 w-6 place-items-center rounded-full border-2 border-white text-[7px] font-bold text-white ${index === 0 ? "bg-[#367A91]" : index === 1 ? "bg-[#C47D5D]" : "bg-[#6B78AA]"}`}
                  >
                    {initials}
                  </span>
                ))}
                <span className="grid h-6 w-8 place-items-center rounded-full border-2 border-white bg-[#D8FF4F] text-[7px] font-bold text-neutral-900">
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
          <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-4 px-4 md:flex-nowrap md:gap-x-6 lg:gap-x-10 lg:px-6">
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
  return <div className={`absolute z-20 min-w-[120px] rounded-lg bg-white p-3 text-left text-neutral-900 shadow-[0_8px_24px_rgba(0,0,0,.15)] sm:min-w-[148px] ${className}`}>{children}</div>;
}
