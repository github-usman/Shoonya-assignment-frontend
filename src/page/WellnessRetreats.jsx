import React from "react";
import Hero from "../components/Hero";
import RetreatsList from "../components/RetreatsList";
import Footer from "../components/Footer";

const WellnessRetreats = () => {
  return (
    <div className="max-w-screen-xxl w-full  px-[24px] xxl:px-0 m-auto">
      <Hero />
      <RetreatsList/>
      <Footer/>
    </div>
  );
};

export default WellnessRetreats;
