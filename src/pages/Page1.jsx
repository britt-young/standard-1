import HomeServices from "../Components/HomeServices";
import HomeHero from "../Components/HomeHero";
import HomeAbout from "../Components/HomeAbout";
import ComparisonGallery from "../Components/ComparisonGallery";

const Page1 = () => {
  return (
    <div>
      <HomeHero />
      <HomeServices />
      <HomeAbout />
      <ComparisonGallery />
    </div>
  );
};

export default Page1;
