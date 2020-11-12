import axios from 'axios';

export const getAllComics = (limit) => async dispatch => {
  const response = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?apikey=bfef4b7aafd300840e8acb650288e0e3&limit=${limit}`);
  dispatch({
    type: 'GET_COMICS',
    payload: response.data.data.results
  });
};
