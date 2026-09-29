import CourseCatalog from "@/components/CourseCatalog";
import GrowthState from "@/components/GrowthState";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <CourseCatalog />
      <GrowthState/>
    </main>
  );
}
