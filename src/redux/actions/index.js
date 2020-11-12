import axios from 'axios';

export const getAllComics = () => async dispatch => {
  const response = await axios.get('https://gateway.marvel.com:443/v1/public/comics?apikey=bfef4b7aafd300840e8acb650288e0e3&limit=99');
  dispatch({
    type: 'GET_COMICS',
    payload: response.data.data.results
  });
};

export const getOneComic = (id) => async dispatch => {
  const response = await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=bfef4b7aafd300840e8acb650288e0e3`);
  dispatch({
    type: 'GET_ONE_COMIC',
    payload: response.data.data.results
  });
};