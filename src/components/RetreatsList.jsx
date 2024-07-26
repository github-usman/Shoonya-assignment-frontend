import React, { useEffect, useState } from "react";
import { useApiParamsContexts } from "../contexts/ApiParamsContexts";

import Retreat from "./Retreat";
import fetchRetreats from "../services/retreatsService";
import { fetchClientFilter } from "../utils/clientFilter";
import NoDataFound from "./NoDataFound";

const RetreatsList = () => {
  const {
    limit,
    filter,
    location,
    search,
    currentPage,
    selectedDate,
    allData,
  } = useApiParamsContexts();
  const [retreatList, setRetreatList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedDate) {
          //**DATE RANGE** filter method NOT PROVIDED BY MOCKAPI.IO, Applied all filter method on CLIENT SIDE

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
        } else {
          // filter method from **SERVER SIDE** with optional query parameters

          const queryParams = new URLSearchParams({
            page: currentPage, // mandatory
            limit, // mandatory
            ...(filter && { filter }), // optional
            ...(location && { location }), // optional
            ...(search && { search }), // optional
          }).toString();

          const data = await fetchRetreats(queryParams);
          setRetreatList(data);
        }
      } catch (error) {
        if (error.statusCode === 404) {
          setRetreatList([]);
        } else {
          console.log("Server error:", error);
        }
      }
    };
    fetchData();
  }, [limit, filter, location, allData, search, currentPage, selectedDate]);

  return (
    <div className="mt-[25px]">
      {retreatList.length > 0 ? (
        <div className="grid grid-cols-3 gap-[24px]">
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
