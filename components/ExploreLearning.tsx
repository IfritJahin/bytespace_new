const categories = [
    { label: "Design", icon: "🎨" },
    { label: "Development", icon: "💻" },
    { label: "IT & Software", icon: "🖥️" },
    { label: "Business", icon: "💼" },
    { label: "Marketing", icon: "📣" },
    { label: "Photography", icon: "📷" },
  ];
  
  export default function ExploreLearning() {
    return (
      <section className="bg-neutral-50 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">Explore Diverse Learning Paths at Bytespace</h2>
          <p className="mt-4 text-xs text-neutral-500 md:text-sm">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans
            various fields, catering to your unique interests and career goals.
          </p>
        </div>
  
        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 px-6 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((c) => (
            <li key={c.label} className="flex flex-col items-center gap-3">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#D8FF4F] text-xl">{c.icon}</span>
              <span className="text-xs font-medium text-neutral-700">{c.label}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }