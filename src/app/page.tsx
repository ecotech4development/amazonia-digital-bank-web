import Header from "@/components/Header";
import MarqueeSection from "@/components/MaqueeSection";
import Advantages from "@/components/sections/Advantages";
import FeatureBanner from "@/components/sections/FeatureBanner";
import FormSection from "@/components/sections/FormSection";
import Hero from "@/components/sections/Hero";
// import Media from "@/components/sections/Media";
import Newsletter from "@/components/sections/Newsletter";
import Partner from "@/components/sections/Partner";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FeatureBanner />
      <MarqueeSection />
      <Advantages />
      {/* <Media /> */}
      <Partner />
      <Newsletter />
      <FormSection />
    </>
  );
}
