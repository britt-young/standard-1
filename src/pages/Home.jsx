import HomeServices from "../Components/HomeServices";
import HomeHero from "../Components/HomeHero";
import HomeAbout from "../Components/HomeAbout";
import ComparisonGallery from "../Components/ComparisonGallery";
import Testimonials from "../Components/Testimonials";
import HomeCTA from "../Components/HomeCTA";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <HomeServices />
      <HomeAbout />
      <ComparisonGallery />
      <Testimonials />
     <HomeCTA />
    </div>
  );
};

export default Home;
