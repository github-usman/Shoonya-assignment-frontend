import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

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
