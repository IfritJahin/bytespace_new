import Image from "next/image";
import Navbar from "./Navbar";

const logos = ["Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum", "Logoipsum"];

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative isolate overflow-hidden bg-[#003BE2] pb-0 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.075) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.075) 1px,transparent 1px)",
          backgroundSize: "66px 66px",
        }}
      >
        <Navbar />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 mx-auto h-full max-w-[0px] bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/3d%20ornament.png")',
            backgroundSize: "100% auto",
          }}
        />
        <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col items-center px-5 pt-8 text-center sm:px-8 md:pt-10 lg:pt-12">
          <h1 className="max-w-[760px] text-[38px] font-bold leading-[1.08] sm:text-5xl lg:text-[56px]">
            Get Access to Hundreds<br className="hidden sm:block" /> Courses Available
            </h1>
          <p className="mt-4 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm">Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.</p>
          <form role="search" action="#discover" className="mt-6 flex h-12 w-full max-w-[460px] items-center gap-2 rounded-full bg-white p-1.5 pl-4 shadow-[0_8px_30px_rgba(0,0,0,.12)]">
            <label htmlFor="q" className="sr-only">Search courses</label>
            <input id="q" name="q" type="search" placeholder="Course, topic, creator" className="min-w-0 flex-1 bg-transparent text-xs text-neutral-800 placeholder:text-neutral-400 focus:outline-none" />
            <button type="submit" className="h-9 rounded-full bg-[#D8FF4F] px-5 text-xs font-semibold text-neutral-900 transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003BE2]">Search</button>
          </form>
          <div className="relative mt-5 h-[350px] w-full max-w-[1000px] sm:h-[410px] md:h-[500px]">
            <div aria-hidden="true" className="absolute left-1/2 top-32 z-0 h-[580px] w-[620px] -translate-x-1/2 rounded-[50%] bg-[#D8FF4F] sm:top-36 sm:h-[700px] sm:w-[760px] lg:top-40 lg:h-[850px] lg:w-[900px]" />
            <Image src="/hero-student.png" alt="Student learning on a laptop with headphones" width={578} height={541} priority sizes="(max-width: 640px) 320px, (max-width: 1024px) 420px, 578px" className="absolute bottom-0 left-1/2 z-10 h-auto w-[310px] -translate-x-1/2 object-contain sm:w-[390px] md:w-[470px] lg:w-[578px]" />
            <FloatCard className="left-0 top-16 sm:left-5 md:left-12 lg:left-16">
              <p className="text-[11px] font-semibold sm:text-xs">UI/UX Design</p>
              <p className="mt-1 text-[9px] text-neutral-400 sm:text-[10px]">200 Courses · 1000+ Students</p>
            </FloatCard>
            <FloatCard className="right-0 top-5 sm:right-5 md:right-12 lg:right-16">
              <p className="text-[9px] text-neutral-500 sm:text-[10px]">Learning Progress</p>
              <p className="mt-0.5 text-xl font-bold sm:text-2xl">55%</p>
              <div className="mt-1 h-1 w-full rounded-full bg-neutral-200">
                <div className="h-full w-[55%] rounded-full bg-[#D8FF4F]" />
              </div>
            </FloatCard>
            <FloatCard className="bottom-7 left-0 sm:bottom-10 sm:left-5 md:left-12 lg:left-16">
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
      <section id="community" aria-label="Trusted by" className="bg-[#F6F6F8] py-7 sm:py-9">
        <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 text-neutral-400 sm:gap-x-14">
          {logos.map((logo, index) => <li key={index} className="flex items-center gap-2 text-xs font-semibold sm:text-sm"><span aria-hidden="true" className={`h-4 w-4 rounded-full ${index % 2 === 0 ? "border-[3px] border-neutral-400" : "bg-neutral-400"}`} />{logo}</li>)}
        </ul>
      </section>
      <section id="discover" className="bg-white px-6 py-12 text-center sm:py-16">
        <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">Discover Your Passion</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-neutral-500">Explore practical courses designed to help you learn something new and move forward.</p>
      </section>
    </>
  );
}

function FloatCard({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`absolute z-20 min-w-[120px] rounded-lg bg-white p-3 text-left text-neutral-900 shadow-[0_8px_24px_rgba(0,0,0,.15)] sm:min-w-[148px] ${className}`}>{children}</div>;
}
