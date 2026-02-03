import HomeServices from "../Components/HomeServices";
import HomeHero from "../Components/HomeHero";
import HomeAbout from "../Components/HomeAbout";
import ComparisonGallery from "../Components/ComparisonGallery";
import Testimonials from "../Components/Testimonials";

const Page1 = () => {
  return (
    <div>
      <HomeHero />
      <HomeServices />
      <HomeAbout />
      <ComparisonGallery />
      <Testimonials />
    </div>
  );
};

export default Page1;
