export default function CreatorsFeature() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-[#003BE2] text-center text-white sm:min-h-[600px] lg:h-[500px] lg:min-h-0">
      {/* Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/grid.png')" }}
      />

      {/* 3D ornaments */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-cover bg-center"
        style={{ backgroundImage: "url('/ornaments.png')" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[964px] flex-col items-center px-5 pt-24 sm:px-6 sm:pt-28 lg:pt-[125px]">
        <h2 className="w-full max-w-[710px] text-center text-[32px] font-semibold leading-[120%] tracking-[-1%] sm:text-[38px] lg:text-[44px]">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        <p className="mt-5 w-full max-w-[964px] text-center text-[16px] font-normal leading-[160%] text-[#F5F5F6] sm:mt-6 sm:text-[17px] lg:text-[18px]">
          Explore this collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Creator Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Creator Library.
        </p>

        <button className="mt-7 rounded-full bg-[#D8FF4F] px-6 py-3 text-xs font-semibold text-neutral-900 transition hover:brightness-95">
          <a href="/signup" target="_blank" rel="noopener noreferrer">
            Join as Creator
          </a>
        </button>
      </div>
    </section>
  );
}