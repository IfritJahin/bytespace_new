import CourseCatalog from "@/components/CourseCatalog";
import CreatorsFeature from "@/components/CreatorsFeature";
import GrowthState from "@/components/GrowthState";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <CourseCatalog />
      <GrowthState/>
      <CreatorsFeature/>
    </main>
  );
}
