import Image from "next/image";
import Navbar from "./Navbar";
import CourseCatalog from "./CourseCatalog";

const logos = [{src: "/Frame (1).png"}, {src: "/Frame (2).png"}, {src: "/Frame (3).png"}, {src: "/Frame (4).png"}, {src: "/Frame (5).png"}];
const ornaments = [
  {
    src: "/colorspring.png",
    width: 200,
    height: 200,
    className: "left-[-18px] top-[130px] w-[250px] max-xl:left-[-60px] max-xl:top-[100px] max-xl:w-[180px] max-sm:left-[-72px] max-sm:w-[135px]",
  },
  {
    src: "/spring1.png",
    width: 175,
    height: 175,
    className: "left-[184px] top-[390px] w-[175px] -rotate-180 max-xl:left-[70px] max-xl:top-[380px] max-xl:w-[130px] max-sm:hidden",
  },
  {
    src: "/spring2.png",
    width: 330,
    height: 330,
    className: "right-[-15px] top-[580px] w-[330px] max-xl:right-[-50px] max-xl:top-[560px] max-xl:w-[220px] max-sm:hidden",
  },
  {
    src: "/Cone.png",
    width: 188,
    height: 188,
    className: "right-[150px] top-[375px] w-[188px] max-xl:right-[-20px] max-xl:top-[350px] max-xl:w-[145px] max-sm:right-[-40px] max-sm:top-[330px] max-sm:w-[115px]",
  },
  {
    src: "/circle.png",
    width: 342,
    height: 342,
    className: "left-[10px] top-[590px] w-[342px] max-xl:left-[-70px] max-xl:top-[560px] max-xl:w-[260px] max-sm:left-[-105px] max-sm:top-[530px] max-sm:w-[210px]",
  },
  {
    src: "/cyllinder.png",
    width: 370,
    height: 370,
    className: "right-[-20px] top-[115px] w-[250px] max-xl:right-[-80px] max-xl:top-[90px] max-xl:w-[190px] max-sm:right-[-105px] max-sm:top-[85px] max-sm:w-[145px]",
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
        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-5 pt-8 text-center sm:px-8 md:pt-10 lg:pt-12 xl:pt-[91px]">
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
          <p className="relative z-10 mt-5 max-w-[760px] text-sm xl:mt-9 leading-relaxed text-white/85 sm:text-base">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
          <form role="search" action="#discover" className="relative z-10 mt-8 flex w-full max-w-[590px] xl:mt-[100px] items-center gap-3 max-sm:gap-2">
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
            <button type="submit" className="h-[52px] shrink-0 rounded-full bg-[#D8FF4F] px-7 text-base text-neutral-900 transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white max-sm:h-12 max-sm:px-5 max-sm:text-sm">Search</button>
          </form>
          <div className="relative mt-5 h-[350px] w-full max-w-[1200px] xl:-mt-5 sm:h-[410px] md:h-[520px] xl:h-[523px]">
            <div aria-hidden="true" className="absolute left-1/2 top-32 z-0 h-[580px] w-[620px] -translate-x-1/2 rounded-[50%] bg-[#D8FF4F] sm:top-36 sm:h-[700px] sm:w-[800px] xl:top-[91px] xl:h-[950px] xl:w-[1140px] max-sm:h-[500px] max-sm:w-[520px]" />
            <Image
              src="/hero-student.png"
              alt="Student learning on a laptop with headphones"
              width={722}
              height={515}
              priority
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 470px, 700px"
              className="absolute bottom-0 left-1/2 z-10 h-auto w-[310px] -translate-x-1/2 object-contain sm:w-[400px] md:w-[500px] xl:left-[calc(50%+55px)] xl:w-[700px] max-sm:w-[82vw] max-sm:max-w-[310px]"
            />
            <FloatCard className="left-0 top-[150px] w-[206px] sm:left-5 md:left-10 xl:left-[278px] xl:top-[143px] max-sm:top-5 max-sm:w-[150px]">
              <p className="font-[Satoshi-Bold] text-sm sm:text-base">UI/UX Design</p>
              <p className="mt-1 text-[10px] text-neutral-500 sm:text-xs">200 Courses · 1000+ Students</p>
            </FloatCard>
            <FloatCard className="right-0 top-[160px] w-[232px] p-4 sm:right-5 md:right-10 xl:right-[247px] xl:top-[155px] max-sm:top-5 max-sm:w-[150px] max-sm:p-3">
              <p className="text-xs text-neutral-500 sm:text-sm">Learning Progress</p>
              <p className="mt-1 font-[Satoshi-Bold] text-2xl sm:text-[32px] sm:leading-tight">55%</p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-neutral-200">
                <div className="h-full w-[55%] rounded-full bg-[#D8FF4F]" />
              </div>
            </FloatCard>
            <FloatCard className="bottom-6 left-0 w-[256px] sm:bottom-10 sm:left-5 md:left-10 xl:bottom-[60px] xl:left-[207px] max-sm:w-[190px]">
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
          <div className="mx-auto flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-4 px-4 md:flex-nowrap md:gap-x-6 lg:gap-x-19 lg:px-6">
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
  return <div className={`absolute z-20 rounded-xl bg-white p-3 text-left text-neutral-900 shadow-[0_8px_24px_rgba(0,0,0,.15)] sm:min-w-[148px] ${className}`}>{children}</div>;
}
