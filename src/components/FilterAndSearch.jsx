import React, { useState } from "react";
import { useApiParamsContexts } from "../contexts/ApiParamsContexts";
import { AttentionSeeker, Slide } from "react-awesome-reveal";

const FilterAndSearch = () => {
    const { setFilter, setSearch, setSelectedDate,setCurrentPage, selectedDate } = useApiParamsContexts();
    const [selectedType, setSelectedType] = useState('');

    // filter by DATA RANGE
    const handleDateChange = (e) => {
        const value = e.target.value;
        if (value === 'none') {
            setSelectedDate(null)
        }
        else if (value === '2023-2024') {
            // start of 2023 and  end of 2023
            setSelectedDate([1672531200, 1703990400, value])
        } else if (value === '2024-2025') {
            // start of 2024 and  end of 2024
            setSelectedDate([1704067200, 1735689600, value])
        }
        setCurrentPage(1);// start with intial page : RESET 
    };

    // filter by TYPE
    const handleSelectType = (e) => {
        const value = e.target.value;
        setSelectedType(value);
        setFilter(value);
        setCurrentPage(1);// start with intial page : RESET 
    };
    // SEARCH
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
        setCurrentPage(1);// start with intial page : RESET 
    };

    return (
        <div className="flex justify-between mt-[16px] md:mt-[21px] text-[18px] md:text-[16px] flex-col md:flex-row gap-[16px] md:gap-0">
            <AttentionSeeker triggerOnce='true' effect="rubberBand">
            <div className="flex gap-[16px] md:gap-[20px]  flex-col md:flex-row">

                <select id="selectedDate" value={selectedDate?.length > 0 ? selectedDate[2] : 'none'} onChange={handleDateChange} className=" md:bg-spaceCadet rounded-none md:rounded-sm text-[#374151]   border-[1px] border-solid border-[#D1D5DB] md:border-spaceCadet md:border-r-[8px] md:border-r-transparent  md:text-white px-[4px] py-[9px] md:p-[8px] hover:shadow-hover-custom-shadow">
                    <option value="none" className="bg-white text-[#a49c9c]">Filter by Date</option>
                    <option value="2023-2024" className="bg-white text-black">2023-2024</option>
                    <option value="2024-2025" className="bg-white text-black">2024-2025</option>
                </select>

                <select id="selectedType" value={selectedType} onChange={handleSelectType} className=" md:bg-spaceCadet rounded-none md:rounded-sm text-[#374151]   border-[1px] border-solid border-[#D1D5DB] md:border-spaceCadet md:border-r-[8px] md:border-r-transparent  md:text-white px-[4px] py-[9px] md:p-[8px] hover:shadow-hover-custom-shadow" >
                    <option className="bg-white text-[#a49c9c]" value="">Filter by Type</option>
                    <option className="bg-white text-black" value="yoga">Yoga</option>
                    <option className="bg-white text-black" value="meditation">Meditation</option>
                    <option className="bg-white text-black" value="detox">Detox</option>
                </select>
            </div>
            </AttentionSeeker>
            <Slide triggerOnce='true' direction="left">
            <input name="search" type="text" placeholder="Search retreats by title" className="w-full bg-transparent md:bg-spaceCadet rounded-sm text-black md:text-white p-[8px] py-[9px] md:p-[8px] border-[1px] border-solid border-[#D1D5DB] md:border-spaceCadet placeholder-[#374151] md:placeholder-white placeholder-opacity-100 hover:shadow-hover-custom-shadow" onChange={handleSearch} autoComplete="on"></input>
            </Slide>
        </div>
    );
};

export default FilterAndSearch;
