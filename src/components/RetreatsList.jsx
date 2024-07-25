import React, { useEffect, useState } from "react";
import fetchRetreats from "../services/retreatsApi";
import RetreatsCard from "./RetreatsCard";
import Pagination from "./Pagination";

const RetreatsList = () => {
  const [retreatList, setRetreatList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const pageLimit = 3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRetreats('page', `${currentPage}&limit=${pageLimit}`);
        setRetreatList(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  
  return (
    <div className="mt-[25px]">
      <div className="grid grid-cols-3 gap-[24px]">
        {retreatList.length > 0 ? (
          retreatList.map((retreat) => (
            <div key={retreat.id}>
              <RetreatsCard data={retreat} />
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    { retreatList.length>0 &&  <div className="mt-[24px]  flex justify-center gap-[8px]">
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </div>

    }
    </div>
  );
};

export default RetreatsList;
