import Image from "next/image";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const points = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

// Growth stats + Create & Manage Courses share one continuous light
// gradient background in the design, so they're one section here —
// splitting them into two <section>s would repeat/cut the bg image at
// the seam.
export default function GrowthState() {
  return (
    <section className="relative isolate overflow-hidden py-16 md:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/bggrowth.png')" }}
      />

      {/* Growth stats */}
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-24">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-4xl">
            Your Path to Professional Growth Starts Here!
          </h2>

          <p className="mt-4 max-w-md text-xs text-neutral-600 md:text-sm">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
            career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark
            on a new career path entirely, we have the resources you need.
          </p>

          <dl className="mt-8 flex gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-2xl font-bold text-[#003BE2] md:text-3xl">{s.value}</dt>
                <dd className="text-xs text-neutral-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto h-[280px] w-full  md:h-[340px]">
          <Image src="/boy.png"  width={621} height={552} alt="Student with laptop"  className="object-contain" />

        </div>
      </div>

      {/* Create & manage courses */}
      <div className="mx-auto mt-20 grid max-w-[1440px] grid-cols-1 items-center gap-10 px-6 md:mt-32 md:grid-cols-2 md:px-24">
        <div className="relative ">
        <Image src="/girl.png"  width={621} height={552} alt="Student with laptop"  className="object-contain" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">Create & Manage Courses Easily.</h2>
          <p className="mt-4 max-w-md text-xs text-neutral-600 md:text-sm">
            <strong className="text-neutral-900">ByteSpace</strong> supports individuals or entities in the
            creation, publication, and administration of educational courses.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-neutral-700">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#003BE2] text-[10px] text-[#fff]">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}