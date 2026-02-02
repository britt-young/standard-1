import HomeAbout from "../Components/HomeAbout";
import HomeHero from "../Components/HomeHero";
import landscaping from "../assets/landscaping-silhouette1.svg";

const Page1 = () => {
  return (
    <div>
      <HomeHero />
      {/* <img className="absolute -bottom-16" src={landscaping} alt="landscapingsvg" /> */}
      <HomeAbout />
    </div>
  );
};

export default Page1;
