import axios from 'axios';

export const getOneComic = (id) => async dispatch => {
  const response = await axios.get(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=bfef4b7aafd300840e8acb650288e0e3`);
  dispatch({
    type: 'GET_ONE_COMIC',
    payload: [
      response.data.data.results[0],
      response.data.data.results[0].title,
      response.data.data.results[0].thumbnail.path,
      response.data.data.results[0].thumbnail.extension,
      response.data.data.results[0].prices[0].price,
      response.data.data.results[0].stories.items,
    ]
  });
};