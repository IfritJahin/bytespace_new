const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    src: '/Ellipse.png',
    initials: "SA",
    avatar: "bg-[#F2B632]",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    src: '/Ellipse (1).png',
    initials: "JC",
    avatar: "bg-[#2F3A4F]",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    src: '/Ellipse (2).png',
    initials: "AB",
    avatar: "bg-[#C9D6EA] text-neutral-800",
    quote:
    "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
  },
];

export default function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden bg-[#F6F7FB] py-16 md:py-24"
      style={{
        backgroundImage:
          "radial-gradient(40% 55% at 58% 18%, rgba(216,255,79,.55), transparent 70%), radial-gradient(35% 50% at 100% 60%, rgba(216,255,79,.35), transparent 70%), radial-gradient(35% 50% at 0% 90%, rgba(0,59,226,.18), transparent 70%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-[115px]">
        <div className="grid items-start gap-6 md:grid-cols-2 md:gap-12">
          <h2
            id="testimonials-heading"
            className="max-w-[540px] text-3xl font-bold leading-[1.2] text-neutral-900 md:text-[36px] lg:text-[40px]"
          >
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[575px] text-sm leading-[1.6] text-neutral-600 md:justify-self-end md:text-base">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-11">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(16,24,40,.06)] md:p-8"
            >
              <span
                aria-hidden="true"
                className={`grid h-16 w-16 place-items-center rounded-full text-lg font-bold text-white ${t.avatar}`}
              >
                {t.src ? (
                  <img src={t.src} alt={t.name} className="h-full w-full rounded-full object-cover" />
                ) : (
                  t.initials
                )}
              </span>
              <p className="mt-6 font-[Satoshi-Bold] text-base text-neutral-900 md:text-lg">{t.name}</p>
              <p className="mt-1 text-sm text-[#003BE2]">{t.role}</p>
              <blockquote className="mt-5 text-sm leading-[1.7] text-neutral-500 md:text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
