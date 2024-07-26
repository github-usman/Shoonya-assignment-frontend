import React from "react";
import hero_yoga_poster from "../assets/media/hero_yoga_poster.jpg";

const Hero = () => {
  return (
    <div className="max-h-[428px] mt-[28px] h-full hidden md:block bg-pearl  rounded-sm shadow-custom-shadow">
      <div className=" px-[24px]  pt-[16px]">
        <img
          src={hero_yoga_poster}
          alt="hero yoga poster"
          className="max-h-[300px] h-full rounded-sm w-full "
        />
        <h4 className="text-[24px] mt-[20px] space-y-[32px] leading-8">Discover Your Inner Peace</h4>
        <p className="text-[16px] mt-[8px] leading-6 pb-[28px]">Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
      </div>

    </div>
  );
};

export default Hero;
