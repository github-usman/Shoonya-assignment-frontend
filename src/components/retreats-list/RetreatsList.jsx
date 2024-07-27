import React, { useEffect, useState } from "react";
import { useApiParamsContexts } from "../../contexts/ApiParamsContexts";
import Retreat from "./Retreat";
import fetchRetreats from "../../services/retreatsService";
import { fetchClientFilter } from "../../utils/clientFilter";
import NoDataFound from "../common/NoDataFound";
import RetreatSkeleton from "../common/RetreatSkeleton";

/**
 * RetreatsList Component
 * 
 * This component fetches and displays a list of retreats based on various filters and parameters.
 * It handles both client-side and server-side filtering and displays skeletons while loading.
 */
const RetreatsList = () => {
  // Context values
  const { limit, filter, location, search, currentPage, selectedDate, allData, isLoading, setIsLoading, setTotalPages } = useApiParamsContexts();
  const [retreatList, setRetreatList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    
    /**
     * Fetches data from the server or filters it on the client side based on the selected date.
     */
    const fetchData = async () => {
      try {
        if (selectedDate) {
          // Client-side filtering
          // DATE RANGE filter method NOT PROVIDED BY MOCKAPI.IO, applied all filter methods on CLIENT SIDE
          const [startDate, endDate] = selectedDate;
          const filteredData = fetchClientFilter(allData, {
            filter,
            location,
            search,
            startDate,
            endDate,
          });
          setRetreatList(
            filteredData.slice((currentPage - 1) * limit, limit * currentPage)
          );
          // total pages for client-side
          const pages = Math.ceil(filteredData?.length / 3);
          setTotalPages(pages);
        } else {
          // Server-side filtering
          const queryParams = new URLSearchParams({
            page: currentPage, // mandatory
            limit, // mandatory
            ...(filter && { filter }), // optional
            ...(location && { location }), // optional
            ...(search && { search }), // optional
          }).toString();

          const data = await fetchRetreats(queryParams);
          setRetreatList(data); // server API called and data set

          // Calculate total pages for client-side
          const filteredData = fetchClientFilter(allData, { filter, location, search });
          const pages = Math.ceil(filteredData?.length / 3);
          setTotalPages(pages);
        }
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        if (error.statusCode === 404) {
          setRetreatList([]);
        } else {
          console.log("Server error:", error);
        }
      }
    };

    fetchData();
    // eslint-disable-next-line
  }, [limit, filter, location, allData, search, currentPage, selectedDate]);

  return (
    <div className="mt-[12px] md:mt-[25px]">
      {isLoading ?
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[12px] md:gap-[24px]">
          <RetreatSkeleton />
          <RetreatSkeleton />
          <RetreatSkeleton />
        </div>
        :
        retreatList.length > 0 ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[12px] md:gap-[24px]">
            {retreatList.map((retreat) => (
              <div key={retreat.id}>
                <Retreat data={retreat} />
              </div>
            ))}
          </div>
        ) : (
          <NoDataFound />
        )}
    </div>
  );
};

export default RetreatsList;
