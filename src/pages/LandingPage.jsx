import React from "react";
import FilterAndSearch from "../components/FilterAndSearch";
import Hero from "../components/Hero";
import Pagination from "../components/Pagination";
import RetreatsList from "../components/retreats-list/RetreatsList";

const LandingPage = () => {
  return (
    <div className="max-w-screen-xxl w-full px-[16px] md:px-[24px] xxl:px-0 m-auto">
      <Hero />
      <FilterAndSearch />
      <RetreatsList />
      <Pagination />
    </div>
  );
};

export default LandingPage;
