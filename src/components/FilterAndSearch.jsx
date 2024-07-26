import React, { useState } from "react";
import { useApiParamsContexts } from "../contexts/ApiParamsContexts";

const FilterAndSearch = () => {
    const { setFilter, setSearch, setSelectedDate, selectedDate } = useApiParamsContexts();
    const [selectedType, setSelectedType] = useState('');

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
    };
    // filter by TYPE
    const handleSelectType = (e) => {
        const value = e.target.value;
        setSelectedType(value);
        setFilter(value);
    };
    // SEARCH
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearch(value);
    };

    return (
        <div className="flex justify-between mt-[21px]">
            <div className="flex gap-[20px]">
                <select id="dateFilter" value={selectedDate?.length > 0 ? selectedDate[2] : 'none'} onChange={handleDateChange} className="bg-spaceCadet rounded-sm text-white p-[8px]">
                    <option value="none">Filter by Date</option>
                    <option value="2023-2024">2023-2024</option>
                    <option value="2024-2025">2024-2025</option>
                </select>
                <select id="dateFilter" value={selectedType} onChange={handleSelectType} className="bg-spaceCadet rounded-sm text-white p-[8px]">
                    <option value="">Filter by Type</option>
                    <option value="yoga">Yoga</option>
                    <option value="meditation">Meditation</option>
                    <option value="detox">Detox</option>
                </select>
            </div>
            <input type="text" placeholder="Search retreats by title" className="bg-spaceCadet rounded-sm text-white p-[8px]" onChange={handleSearch}></input>
        </div>
    );
};

export default FilterAndSearch;
