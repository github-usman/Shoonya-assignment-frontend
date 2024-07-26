import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import rating from "../assets/media/star.png";
import NoDataFound from '../components/NoDataFound';
import { AttentionSeeker } from 'react-awesome-reveal';

const IndividualRetreatDetails = () => {
  const location = useLocation();
  const { data, monthName, day, year } = location.state || {};

  if (!data) {
    return <NoDataFound />;
  }
  const handleBookSeat = () => {
    alert('Ticket Booking feature will available soon...')
  }
  return (

    <>
      {/* top  section */}
      <main className=" bg-[#1A1A1A] leading-[16px] md:leading-[20px] shadow-custom-shadow text-[18px]" >
        <div className='max-w-screen-xxl w-full px-[16px] md:px-[24px] xxl:px-0 m-auto relative'>
          <div className='absolute top-1/2 z-10 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-1/3 transform  -translate-y-1/2 text-white'>
            <div className='flex flex-col gap-[1rem] text-center'>
              <h2 className='md:mb-[2rem] text-white text-[35px] leading-[30px] font-bold'>{data.title}</h2>
              <div className='flex items-center gap-5 flex-wrap'><img className='w-[32px] h-auto' src={rating} alt="star " />  <h4 className='text-[30px] font-bold'>6.7/10</h4> <p>33.8k people booked</p></div>
              <p className='bg-white w-fit rounded-sm py-[5px] px-1 text-black'>{data.location}</p>
              <div className='flex  gap-5'>{data.tag.map((element, index) => (<p key={index}>{element},</p>))}</div>
              <div className='flex'><p>{day} Day&emsp;.&emsp; </p> {monthName} {day}, {year}</div>
              <AttentionSeeker triggerOnce='true' effect="rubberBand" className='bg-red-500 md:mt-[2rem] w-fit px-[3rem] md:px-[5rem] py-[16px] text-[18px] font-semibold rounded-sm hover:shadow-hover-custom-shadow' onClick={handleBookSeat}>Book Seat</AttentionSeeker>
            </div>
          </div>
          <div className='flex h-[450px] gap-[10%] justify-center'>
            <div className="w-full hidden md:block md:w-1/4 p-5">
              <img src={data.image} alt={data.title} className="max-w-full h-full object-cover rounded-sm md:rounded-lg" />
            </div>
            <div className="w-full md:w-1/2 opacity-60 custom-shadow-lr">
              <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </main>
      {/* bottom part */}
      <article className='max-w-screen-xxl w-full px-[16px] md:px-[24px] xxl:px-0 m-auto mt-[24px]'>
        <div className='flex justify-between flex-wrap '><p className='text-[28px] font-semibold '>About </p><Link to={'/'} className='bg-red-700 rounded-sm px-[1.5rem] py-[0.7rem] text-white z-10 hover:shadow-hover-custom-shadow'>&lt;&lt; Back to Home</Link></div>
        <p>{data.description} and you may know that Yoga is a holistic practice that originated in ancient India and encompasses physical, mental, and spiritual disciplines aimed at achieving harmony and balance in life. The word "yoga" is derived from the Sanskrit root "yuj," which means to unite or integrate. Traditionally, yoga is seen as a means to unite the individual self with the universal consciousness or spirit.</p>
        <p className='text-[28px] font-semibold'>After attend this seen what you will achieve?</p>
        <p className='pb-2'>There are various benefits here is some pointer : </p>
        <div className='flex gap-3 flex-wrap'>{data.tag.map((element, index) => (<p key={index} className='rounded-sm capitalize  border-2 border-solid border-spaceCadet w-fit text-spaceCadet px-[3rem] py-[1rem]'>{element}</p>))}</div>
        <p className='rounded-sm mt-3 capitalize border-2 border-solid border-spaceCadet w-fit text-spaceCadet px-[3rem] py-[1rem]'>{data.condition}</p>
      </article>
    </>
  );
};

export default IndividualRetreatDetails;
