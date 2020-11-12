import axios from 'axios';
export const getAllComis = () => async dispatch => {
  const response = await axios.get('https://gateway.marvel.com:443/v1/public/comics?apikey=bfef4b7aafd300840e8acb650288e0e3&limit=99');
  dispatch({
    type: 'GET_COMICS',
    payload: response.data.data.results
  });
};