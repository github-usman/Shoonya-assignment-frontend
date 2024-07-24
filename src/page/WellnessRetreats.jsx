import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const WellnessRetreats = () => {
  return (
    <>
      <Navbar />
       <div className="max-w-screen-xxl w-full  px-[24px] xxl:px-0 m-auto">
        <Hero />
      </div>
    </>
  );
};

export default WellnessRetreats;
