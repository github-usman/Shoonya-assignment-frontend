import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

const fetchRetreats = async (paramName, paramValue) => {
  try {
    const url = paramName && paramValue
      ? `${BASE_URL}/retreats?${paramName}=${paramValue}` // iff paramater provided
      : `${BASE_URL}/retreats`;  // iff paramater is not provided

    // API request
    const {data} = await axios.get(url);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch retreats data');
  }
};

export default fetchRetreats;
