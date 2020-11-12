import axios from 'axios';

export const getAllSeries = () => async dispatch => {
  const response = await axios.get(`https://gateway.marvel.com:443/v1/public/series?apikey=bfef4b7aafd300840e8acb650288e0e3`);
  dispatch({
    type: 'GET_SERIES',
    payload: response.data.data.results
  });
};