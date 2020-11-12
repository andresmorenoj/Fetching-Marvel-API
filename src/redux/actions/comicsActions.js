import axios from 'axios';

export const getAllComics = (limit) => async dispatch => {
  const response = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?apikey=b0ca0515fa96e5e9be41599f50a9a412&limit=${limit}`);
  dispatch({
    type: 'GET_COMICS',
    payload: response.data.data.results
  });
};
