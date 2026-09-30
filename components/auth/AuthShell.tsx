import Image from "next/image";
import Link from "next/link";
import CourseCard from "@/components/CourseCard";
import HappyStudents from "@/components/HappyStudents";
import { courses } from "@/lib/courses";


// The 3D ornaments only exist as white renders; mask a lime layer to the
// shape and multiply the white render on top so the shading survives.
function LimeOrnament({ src, className }: { src: string; className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute block bg-[#D8FF4F] ${className}`}
      style={{ mask: `url('${src}') center / contain no-repeat`, WebkitMask: `url('${src}') center / contain no-repeat` }}
    >
      <Image src={src} alt="" fill sizes="160px" className="object-contain mix-blend-multiply" />
    </span>
  );
}

function Collage() {
  const back = courses.find((c) => c.title === "Build Digital Asset")!;
  const front = courses.find((c) => c.title === "the Power of Big Data")!;

  return (
    <div aria-hidden="true" className="relative mt-12 hidden h-[560px] w-[520px] lg:block">
      <CourseCard course={back} imageSizes="300px" className="absolute top-[90px] left-0 w-[290px]" />
      <CourseCard course={front} imageSizes="340px" className="absolute top-0 left-[110px] z-10 w-[340px]" />

      <LimeOrnament src="/circle.png" className="top-[10px] left-[40px] z-20 h-[90px] w-[90px] -rotate-12" />
      <LimeOrnament src="/Cone.png" className="bottom-[40px] left-[-20px] z-20 h-[130px] w-[130px]" />
      <Image
        src="/spring1.png"
        alt=""
        width={177}
        height={176}
        className="absolute top-[330px] left-[390px] z-20 h-auto w-[100px]"
      />

      <HappyStudents
        theme="lime"
        size="sm"
        avatars={["/p1.png", "/p2.png", "/p3.png", "/p4.png", "/p5.png", "/p6.png"]}
        className="absolute top-[420px] left-[230px] z-30 w-[270px]"
      />
    </div>
  );
}

export default function AuthShell({
  tagline,
  description,
  children,
}: {
  tagline: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main
      className="relative min-h-screen w-full overflow-hidden bg-[#003BE2] text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.075) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.075) 1px,transparent 1px)",
        backgroundSize: "66px 66px",
      }}
    >
      <div className="mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 py-8 md:px-12 lg:px-[120px]">
        <Link href="/" aria-label="ByteSpace home" className="block h-[37px] w-[32px] shrink-0 overflow-hidden">
          {/* Header_Logo.png is mark + wordmark; show only the lime mark */}
          <Image src="/Header_Logo.png" alt="" width={171} height={37} priority className="h-[37px] w-[171px] max-w-none" />
        </Link>

        <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:gap-16 lg:py-10">
          <div>
            <p className="font-[Satoshi-Bold] text-lg">{tagline}</p>
            <p className="mt-3 max-w-[420px] text-sm leading-relaxed text-white/80">{description}</p>
            <Collage />
          </div>

          <section className="flex w-full flex-col rounded-2xl bg-white p-7 text-neutral-900 shadow-[0_20px_60px_rgba(0,0,0,.18)] sm:p-12 lg:min-h-[680px]">
            {children}
          </section>
        </div>
      </div>
    </main>
  );
}
