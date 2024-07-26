import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-spaceCadet h-[64px] flex items-center">
      <Link to={'/'} className="max-w-screen-xxl w-full  px-[24px] xxl:px-0 m-auto text-center md:text-start  text-[24px] font-semibold text-white ">
        Wellness Retreats
      </Link>
    </div>
  );
};

export default Header;
