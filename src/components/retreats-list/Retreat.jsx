import React, { useState } from "react";
import { secondsToDate } from "../../utils/secondsToDate";
import dummy_yoga_image from "../../assets/media/dummy_yoga.jpg"

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


  // Function to get a fallback value if the property is empty
  const getFallback = (value, fallback) => value?.trim() || fallback;

  // fallback to default values or real data
  const title = getFallback(data.title, DEFAULT_RETREAT.title);
  const description = getFallback(data.description, DEFAULT_RETREAT.description);
  const date = data.date || DEFAULT_RETREAT.date;
  const location = getFallback(data.location, DEFAULT_RETREAT.location);
  const price = data.price || DEFAULT_RETREAT.price;
  const tag = data.tag || DEFAULT_RETREAT.tag;
  const condition = data.condition || DEFAULT_RETREAT.condition;
  const duration = data.duration || DEFAULT_RETREAT.duration;
  const [monthName, day, year] = secondsToDate(date);

  //special image error handle : IFF IMAGE CURRUPPTED

  const [imgSrc, setImgSrc] = useState(data.image);
  const handleImageError = () => {  
    setImgSrc(dummy_yoga_image);
  }

   /**
   * Handles the click event to navigate to individual retreat details.
   */
    
   const navigate = useNavigate();
   const handleIndividualDetails = () => {
    navigate('/individual-retreat-details', { state: { data: { title, description, date,tag, location, price, imgSrc,condition, duration,  monthName, day, year }} });
  }
  return (
    <div className="h-full w-[100%] bg-pearl text-[16px] leading-[16px] md:leading-[20px] hover:cursor-pointer rounded-sm shadow-custom-shadow hover:shadow-hover-custom-shadow" onClick={handleIndividualDetails}>
      <div className="p-[16px] pt-[8px]  md:p-[16px]">
      <img
          src={imgSrc}
          alt={data.title}
          className="max-w-[300px] md:max-w-[200px] object-cover rounded-sm md:rounded-lg hover:rounded-sm w-full h-[150px] hover:scale-110"
          loading="lazy"
          onError={handleImageError}
        />
        <h2 className="text-[22px] mt-[20px] md:mt-[16px] font-semibold leading-[24px] md:leading-[28px]"> {title} </h2>
        <p className="text-[#374151] md:text-[#030303] my-[3px] mb-[6px] md:my-[8px]">{description}</p>
        <p className="text-[#374151] md:text-[#030303]">Date: {monthName} {day}-{+day + duration}, {year}</p>
        <p className="text-[#374151] md:text-[#030303] my-[3px] md:my-[4px]">Location: {location}</p>
        <p className="text-black font-semibold md:font-normal">Price: ${price}</p>
      </div>
    </div>
  );
};

export default Retreat;
