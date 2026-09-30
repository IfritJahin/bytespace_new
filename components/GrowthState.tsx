import Image from "next/image";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/courses";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const points = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

const happyStudents = ["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png", "/p6.png", "/p7.png"];

const figmaCourse = courses.find((c) => c.title === "Learn Figma from Basic")!;

// Growth stats + Create & Manage Courses share one continuous light
// gradient background in the design, so they're one section here —
// splitting them into two <section>s would repeat/cut the bg image at
// the seam.
export default function GrowthState() {
  return (
    <section
      id="growth"
      aria-labelledby="growth-heading"
      className="relative isolate overflow-hidden bg-[#FAFAFA]"
      style={{
        // Glows sampled from the Figma frame: lime top-left, faint blue top-right,
        // blue on the left between the rows, lime bottom-left, blue bottom-right.
        backgroundImage: [
          "radial-gradient(24% 32% at 30% 0%, rgba(216,255,79,.55), transparent)",
          "radial-gradient(26% 30% at 100% 4%, rgba(80,120,240,.12), transparent)",
          "radial-gradient(30% 20% at 0% 50%, rgba(60,100,235,.22), transparent)",
          "radial-gradient(24% 22% at 0% 96%, rgba(216,255,79,.6), transparent)",
          "radial-gradient(34% 28% at 92% 98%, rgba(60,100,235,.3), transparent)",
        ].join(","),
      }}
    >

      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-12 md:py-24 lg:pt-[124px] lg:pr-0 lg:pb-0 lg:pl-[121px]">
        {/* Growth stats — desktop values measured from the 1440px Figma frame */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,703px)] lg:items-start lg:gap-10">
          <div className="lg:pt-[70px]">
            <h2
              id="growth-heading"
              className="max-w-[560px] font-[Satoshi-Bold] text-3xl leading-[1.2] text-neutral-900 md:text-[36px] lg:max-w-[600px] lg:text-[46px] lg:leading-[1.14]"
            >
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="mt-5 max-w-[480px] text-sm leading-[1.6] text-neutral-600 md:text-base lg:mt-[39px] lg:text-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
              career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark
              on a new career path entirely, we have the resources you need.
            </p>

            <dl className="mt-8 flex gap-10 sm:gap-14 lg:mt-10 lg:gap-12">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-sm text-neutral-600 lg:text-[17px]">{s.label}</dt>
                  <dd className="text-3xl text-[#003BE2] md:text-[32px] lg:text-[34px] lg:leading-tight">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Collage measured from the Figma frame (703x697). Positions are % of the
              frame and text is in cqw, so the whole piece scales together on every screen. */}
          <div className="@container relative mx-auto aspect-[703/697] w-full max-w-[460px] md:mr-0 md:ml-auto md:max-w-[560px] lg:max-w-[703px]">
            <CourseCard
              course={figmaCourse}
              imageSizes="380px"
              compact
              className="absolute top-0 left-[3.1%] w-[53%] overflow-hidden"
            />
            <Image
              src="/boystudent.png"
              alt="Student learning on a laptop"
              width={516}
              height={483}
              sizes="(max-width: 768px) 80vw, 580px"
              className="absolute top-[2.2%] left-[3%] z-10 h-auto w-[80.5%] drop-shadow-[0_30px_40px_rgba(16,24,40,.22)]"
            />
            <div className="absolute top-[30.4%] left-[50.8%] z-20 w-[32.5%] rounded-[2.3cqw] bg-white p-[2.4cqw] shadow-[0_10px_30px_rgba(16,24,40,.12)]">
              <p className="text-[2cqw] text-neutral-800">Learning Progress</p>
              <p className="mt-[0.6cqw] text-[6.3cqw] font-semibold leading-none text-neutral-900">55%</p>
              <div className="mt-[1.8cqw] h-[1.1cqw] w-full rounded-full bg-neutral-100">
                <div className="h-full w-[55%] rounded-full bg-[#D8FF4F]" />
              </div>
            </div>
            <Image
              src="/neonspring.png"
              alt=""
              width={217}
              height={216}
              className="absolute top-[10%] left-[60%] z-30 h-auto w-[29%] rotate-[-45deg]"
            />
          </div>
        </div>

        {/* Create & manage courses */}
        <div className="mt-16 grid items-center gap-10 md:mt-24 md:grid-cols-2 md:gap-8 lg:-mt-[134px] lg:grid-cols-[587px_minmax(0,1fr)] lg:items-start lg:gap-[17px]">
          {/* Collage measured from the Figma export (587x719 frame) */}
          <div className="@container relative order-2 mx-auto aspect-[587/719] w-full max-w-[400px] md:order-1 md:mx-0 md:max-w-[500px] lg:max-w-[587px]">
            <div className="absolute top-[6.5%] left-0 w-[38.7%] rounded-[2.7cqw] bg-[#0038E0] p-[2.7cqw] text-white">
              <p className="text-[2.7cqw] leading-tight">Total Revenue</p>
              <p className="text-[1.7cqw] text-white/75">July 1-28</p>
              <p className="mt-[1cqw] text-[3.8cqw] font-semibold leading-tight">$120.29</p>
              <div className="mt-[1.6cqw] h-[1.1cqw] w-full rounded-full bg-white">
                <div className="h-full w-[65%] rounded-full bg-[#D8FF4F]" />
              </div>
            </div>
            <div className="absolute top-[27.4%] left-0 w-[22.8%] rounded-[2.7cqw] bg-[#0038E0] p-[2.7cqw] text-white">
              <p className="text-[2.7cqw] leading-tight">Year to Date</p>
              <p className="text-[1.7cqw] text-white/75">2023</p>
              <p className="mt-[1cqw] text-[3.8cqw] font-semibold leading-tight">$1,200.38</p>
              <span className="mt-[1.6cqw] inline-block rounded-full bg-[#D8FF4F] px-[1.5cqw] py-[0.5cqw] text-[1.6cqw] text-neutral-900">
                +12$
              </span>
            </div>

            <Image
              src="/girlstudent.png"
              alt="Creator holding a tablet"
              width={579}
              height={719}
              sizes="(max-width: 768px) 90vw, 500px"
              className="absolute top-0 left-0 z-10 h-auto w-[98.6%]"
            />
            <Image
              src="/neonspring.png"
              alt=""
              width={217}
              height={216}
              className="absolute top-[15%] left-[51%] z-20 h-auto w-[40%] rotate-[8deg]"
            />

            <div className="absolute top-[57.9%] left-[48%] z-30 w-[44.5%] rounded-[2.7cqw] bg-white p-[2.7cqw] shadow-[0_10px_30px_rgba(16,24,40,.12)]">
              <p className="text-[2.7cqw] leading-tight text-neutral-900">Happy Students</p>
              <p className="mt-[0.4cqw] flex items-center gap-[0.8cqw] text-[1.9cqw] text-neutral-500">
                <span className="font-semibold text-neutral-900">4.5</span> (240)
                <span aria-hidden="true" className="text-[#C8F31D]">★</span>
              </p>
              <div className="mt-[1.6cqw] flex items-center">
                {happyStudents.map((src) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={40}
                    height={40}
                    className="-mr-[1.4cqw] h-[6.1cqw] w-[6.1cqw] shrink-0 rounded-full border-[0.35cqw] border-white object-cover"
                  />
                ))}
                <span className="grid h-[6.8cqw] w-[6.8cqw] shrink-0 place-items-center rounded-full bg-[#D8FF4F] text-[2.1cqw] font-semibold text-neutral-900">
                  2K+
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 md:pl-4 lg:pt-[100px] lg:pl-0">
            <h2 className="max-w-[420px] font-[Satoshi-Bold] text-3xl leading-[1.2] text-neutral-900 md:text-[36px] lg:max-w-[460px] lg:text-[44px]">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="mt-5 max-w-[470px] text-sm leading-[1.7] text-neutral-600 md:text-base">
              <strong className="font-semibold text-neutral-900">ByteSpace</strong> supports individuals or entities
              in the creation, publication, and administration of educational courses.
            </p>
            <ul className="mt-7 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-neutral-700 md:text-base">
                  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 shrink-0">
                    <circle cx="10" cy="10" r="10" fill="#003BE2" />
                    <path d="m6 10.2 2.6 2.6L14 7.4" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
