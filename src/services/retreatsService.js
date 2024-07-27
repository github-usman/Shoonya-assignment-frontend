import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

/**
 * Fetch retreats from the server with query parameters including pagination.
 * @param {Object} queryParams - The query parameters for filtering and pagination.
 * @param {number} queryParams.page - The page number for pagination.
 * @param {number} queryParams.limit - The limit of items per page for pagination.
 * @param {string} [queryParams.filter] - The filter string to search within data objects.
 * @param {string} [queryParams.location] - The location to filter by.
 * @param {string} [queryParams.search] - The search string to search within data objects.
 * @returns {Promise<Object>} The fetched data or an error object.
 */

const fetchRetreats = async (queryParams) => {
  try {
    const url = `${BASE_URL}/retreats?${queryParams}`;
    const {data} = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchRetreats;
