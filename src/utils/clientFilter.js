// date RANGE FILTER METHOD NOT PROVIDED BY MOCKAPI.IO 

/**
 * Apply all client-side filters to the data.
 * @param {Array} allData - The array of data to filter.
 * @param {Object} queryParams - The query parameters for filtering.
 * @param {string} queryParams.filter - The filter string to search within data objects.
 * @param {string} queryParams.location - The location to filter by.
 * @param {string} queryParams.search - The search string to search within data objects.
 * @param {number} queryParams.startDate - The start date for date range filter (timestamp).
 * @param {number} queryParams.endDate - The end date for date range filter (timestamp).
 * @returns {Array} The filtered data.
 */
export const fetchClientFilter = (allData, queryParams) => {
    let filteredData = allData;

    const { filter: filterBy, location, search, startDate, endDate } = queryParams;

    // [DATE-RANGE] Filter by startDate and endDate
    if (startDate && endDate) {
        filteredData = filteredData.filter(item => {
            const itemDate = item.date;
            return itemDate >= startDate && itemDate <= endDate;
        });
    }

    // [FILTER TYPE] Filter by a general filter string
    if (filterBy) {
        filteredData = filteredData.filter(item => 
            Object.values(item).some(value =>
                value && value.toString().toLowerCase().includes(filterBy.toLowerCase())
            )
        );
    }

    // [Filter by LOCATION] Filter by location string
    if (location) {
        filteredData = filteredData.filter(item => 
            item.location.toLowerCase().includes(location.toLowerCase())
        );
    }

    // [SEARCH] General search in all data fields
    if (search) {
        filteredData = filteredData.filter(item => 
            Object.values(item).some(value =>
                value && value.toString().toLowerCase().includes(search.toLowerCase())
            )
        );
    }

    return filteredData;
};
