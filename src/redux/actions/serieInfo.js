import axios from 'axios';

export const getOneSerie = (id) => async dispatch => {
  const response = await axios.get(`https://gateway.marvel.com:443/v1/public/series/${id}?apikey=bfef4b7aafd300840e8acb650288e0e3`);
  dispatch({
    type: 'GET_ONE_SERIE',
    payload: response
  });
};