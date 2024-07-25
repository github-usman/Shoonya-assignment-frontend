import React, { useEffect, useState } from "react";
import fetchRetreats from "../services/retreatsApi";

const Pagination = ({ currentPage, setCurrentPage }) => {
    const [totalPages, setTotalPages] = useState(1);

    // to count total number items in api   
    useEffect(() => {
        const fetchTotalPages = async () => {
            try {
                const data = await fetchRetreats();
                const pages = Math.ceil(data?.length / 3);
                setTotalPages(pages);
            } catch (error) {
                console.error("Error fetching total pages:", error);
            }
        };

        fetchTotalPages();
    }, []);

    // prev page
    const handlePrevious = () => {
        if (currentPage > 1) {
            console.log("prev click");
            setCurrentPage((val) => val - 1);
        }
    };
    // next  page
    const handleNext = () => {
        if (totalPages > currentPage) {
            console.log("next click");
            setCurrentPage((val) => val + 1);
        }
    };

    return (
        <>
            <button
                className={`bg-spaceCadet text-white  rounded-sm px-[16px] py-[8px] ${currentPage>1?'':'opacity-70 cursor-default'}`}
                onClick={handlePrevious}
            >
                Previous
            </button>
            <button
                className={`bg-spaceCadet text-white  rounded-sm px-[16px] py-[8px] ${currentPage<totalPages?'':'opacity-70 cursor-default'}`}
                onClick={handleNext}
            >
                Next
            </button>
        </>
    );
};

export default Pagination;
