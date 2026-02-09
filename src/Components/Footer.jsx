import logo from "../assets/imgs/nav-logo.jpg";

import SpeedDialBtn from "./SpeedDialBtn";
import Copyright from "./Copyright";

import FooterContact from "./FooterContact";



const Footer = () => {
  return (
    <div className="w-full h-full bg-gray-100">
      <div className="flex flex-col lg:flex-row max-w-6xl gap-10 mx-auto py-12 px-5 lg:px-0">
        <div className="flex flex-col w-1/2">
          <img
            src={logo}
            alt="business logo"
            className="lg:h-55 flex-initial w-105"
          />
          <p className="text-left my-5 w-105">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            minus voluptatibus magni earum id? Dolore ab accusantium
            voluptatibus obcaecati veritatis?
          </p>
          <SpeedDialBtn />
        </div>
        <div className="w-1/2">
          <FooterContact />
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;

{
  /* link side */
}
