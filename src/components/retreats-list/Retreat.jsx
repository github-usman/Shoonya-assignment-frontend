import React from "react";
import { secondsToDate } from "../../utils/secondsToDate";

// dummy data if there is no data this for backup
import { DEFAULT_RETREAT } from "../../assets/constant/dummyAssets";
import { useNavigate } from "react-router-dom";

/**
 * Retreat Component
 * 
 * This component displays a single retreat's details. If no data is provided, it uses default retreat data.
 * It navigates to individual retreat details when clicked.
 * 
 * @param {Object} props - Component props
 * @param {Object} props.data - Retreat data to display
 */
const Retreat = ({ data = DEFAULT_RETREAT }) => {
  const [monthName, day, year] = secondsToDate(data.date);
  const navigate = useNavigate();

   /**
   * Handles the click event to navigate to individual retreat details.
   */
  const handleIndividualDetails = () => {
    navigate('/individual-retreat-details', { state: { data,monthName,day,year } });
  }
  
  return (
    <div className="h-full w-[100%] bg-pearl text-[16px] leading-[16px] md:leading-[20px] hover:cursor-pointer rounded-sm shadow-custom-shadow hover:shadow-hover-custom-shadow" onClick={handleIndividualDetails}>
      <div className="p-[16px] pt-[8px]  md:p-[16px]">
        <img src={data.image} alt={data.title} className="max-w-[300px] md:max-w-[200px]  object-cover rounded-sm md:rounded-lg hover:rounded-sm w-full h-[150px] hover:scale-110" loading="lazy" />
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
