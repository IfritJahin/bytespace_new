import CourseCatalog from "@/components/CourseCatalog";
import CreatorsFeature from "@/components/CreatorsFeature";
import Footer from "@/components/Footer";
import GrowthState from "@/components/GrowthState";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <CourseCatalog />
      <div id="community">
        <GrowthState/>
        <CreatorsFeature/>
      </div>
      <Testimonials />
      <Footer />
    </main>
  );
}
