import React, { useEffect } from "react";

import { useApiParamsContexts } from "../../contexts/ApiParamsContexts";
import fetchRetreats from "../../services/retreatsService";
import PaginationUtils from "./PaginationUtils";

const Pagination = () => {
    const { setAllData, setTotalPages } = useApiParamsContexts();

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
    return (
        <div className="mt-[24px]  flex justify-center">
            <PaginationUtils />
        </div>
    );
};

export default Pagination;
