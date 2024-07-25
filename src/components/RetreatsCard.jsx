import React from "react";
import { secondToDate } from "../utils/secondToDate";

const RetreatsCard = ({ data }) => {
  const [monthName,day,year] = secondToDate(data.date);
  
  return (
    <div className="h-full w-[100%] bg-pearl text-[14px] rounded-sm shadow-custom-shadow">
      <div className="p-[16px]">
        <img
          src={data.image}
          alt={data.title}
          className="max-w-[200px] object-cover rounded-lg w-full h-[150px]"
          loading="lazy"
        />
        <h2 className="text-[20px] mt-[16px]  font-semibold leading-[28px]">
          {data.title}
        </h2>
        <p className="my-[8px]">{data.description}</p>
        <p className="">
          Date: {monthName} {day}-{+day + data.duration}, {year}
        </p>
        <p className="my-[4px]">Location: {data.location}</p>
        <p className="">Price: ${data.price}</p>
      </div>
    </div>
  );
};

export default RetreatsCard;
