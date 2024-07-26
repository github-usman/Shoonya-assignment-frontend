import React, { useEffect, useState } from "react";

import { useApiParamsContexts } from "../contexts/ApiParamsContexts";
import fetchRetreats from "../services/retreatsService";

const Pagination = () => {
    const { setAllData, currentPage, setCurrentPage } = useApiParamsContexts();
    const [totalPages, setTotalPages] = useState(1);

    // For filter or non-filter call api only ***ONE time to GET NUMBER OF ITEMS/count
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRetreats();
                setAllData(data);
                const pages = Math.ceil(data?.length / 3);
                setTotalPages(pages);
            } catch (error) {
            }
        };
        fetchData();
        // eslint-disable-next-line
    }, []);

    // prev page
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((val) => val - 1);
        }
    };
    // next  page
    const handleNext = () => {
        if (totalPages > currentPage) {
            setCurrentPage((val) => val + 1);
        }
    };

    return (
        <div className="mt-[24px]  flex justify-center gap-[8px]">
            <button className={`bg-spaceCadet text-white  rounded-sm px-[16px] py-[8px] ${currentPage > 1 ? '' : 'opacity-70 cursor-default'}`} onClick={(handlePrevious)} >
                Previous
            </button>
            <button className={`bg-spaceCadet text-white  rounded-sm px-[16px] py-[8px] ${currentPage < totalPages ? '' : 'opacity-70 cursor-default'}`} onClick={handleNext}>
                Next
            </button>
        </div>
    );
};

export default Pagination;
