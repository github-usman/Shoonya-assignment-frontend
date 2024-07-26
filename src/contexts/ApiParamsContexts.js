import React, { createContext, useState, useContext } from "react";
const ApiParamsContexts = createContext();

export const ApiParamsProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [filter, setFilter] = useState("");
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const [allData, setAllData] = useState([]); // for Client side manipulation retireive all data

  return (
    <ApiParamsContexts.Provider
      value={{
        isLoading,
        selectedDate,
        currentPage,
        limit,
        filter,
        location,
        search,
        allData,
        totalPages,
        setIsLoading,
        setSelectedDate,
        setCurrentPage,
        setLimit,
        setFilter,
        setLocation,
        setSearch,
        setAllData,
        setTotalPages
      }}
    >
      {children}
    </ApiParamsContexts.Provider>
  );
};

export const useApiParamsContexts = () => useContext(ApiParamsContexts);
