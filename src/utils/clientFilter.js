// date RANGE FILTER METHOD NOT PROVIDED BY MOCKAPI.IO so 
// Utility function for client-side filtering

export const fetchClientFilter = (allData, queryParams) => {
    let filteredData = allData;

    const { filter: filterBy, location, search, startDate, endDate } = queryParams;

    // [DATE-RANGE] filter
    if (startDate && endDate) {
        filteredData = filteredData.filter(item => {
            const itemDate = item.date;
            return itemDate >= startDate && itemDate <= endDate;
        });
    }

    // [FILTER TYPE] will search in all data or objects is available after date filter
    if (filterBy) {
        filteredData = filteredData.filter(item => Object.values(item).some(value =>
            value && value.toString().toLowerCase().includes(filterBy.toLowerCase()) // check if objects is there then check keywords sorted by client
        )
        );
    }

    // [Filter by LOCATION] 
    if (location) {
        filteredData = filteredData.filter(item => item.location.toLowerCase().includes(location.toLowerCase()));
    }

    // [SEARCH] anything whatever want if it is exist we can see
    if (search) {
        filteredData = filteredData.filter(item => Object.values(item).some(value =>
            value && value.toString().toLowerCase().includes(search.toLowerCase()) // check if objects is there then check keywords given by client
        )
        );
    }
    return filteredData;
};
