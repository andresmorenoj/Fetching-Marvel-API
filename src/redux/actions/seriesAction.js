import axios from 'axios';

export const getAllSeries = () => async dispatch => {
  const response = await axios.get(`https://gateway.marvel.com:443/v1/public/series?apikey=b0ca0515fa96e5e9be41599f50a9a412`);
  dispatch({
    type: 'GET_SERIES',
    payload: response.data.data.results
  });
};