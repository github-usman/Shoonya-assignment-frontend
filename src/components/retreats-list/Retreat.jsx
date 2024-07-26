import React from "react";
import { secondsToDate } from "../../utils/secondsToDate";

// dummy data if there is no data this for backup
import { DEFAULT_RETREAT } from "../../assets/constant/dummyAssets";

const Retreat = ({ data = DEFAULT_RETREAT }) => {
  const [monthName, day, year] = secondsToDate(data.date);

  return (
    <div className="h-full w-[100%] bg-pearl text-[16px] leading-[16px] md:leading-[20px] rounded-sm shadow-custom-shadow">
      <div className="p-[16px] pt-[8px]  md:p-[16px]">
        <img src={data.image} alt={data.title} className="max-w-[300px] md:max-w-[200px]  object-cover rounded-sm md:rounded-lg w-full h-[150px]" loading="lazy" />
        <h2 className="text-[22px] mt-[20px] md:mt-[16px] font-semibold leading-[24px] md:leading-[28px]"> {data.title} </h2>
        <p className="text-[#374151] md:text-[#030303] my-[3px] mb-[6px] md:my-[8px]">{data.description}</p>
        <p className="text-[#374151] md:text-[#030303]">Date: {monthName} {day}-{+day + data.duration}, {year}</p>
        <p className="text-[#374151] md:text-[#030303] my-[3px] md:my-[4px]">Location: {data.location}</p>
        <p className="text-black font-semibold md:font-normal">Price: ${data.price}</p>
      </div>
    </div>
  );
};

export default Retreat;
