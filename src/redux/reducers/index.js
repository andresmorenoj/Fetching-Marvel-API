import { combineReducers } from 'redux';
import comicsReducer from './comicsReducer';
import oneComic from './oneComic';
import seriesReducer from './seriesReducer';
import oneSerie from './oneSerie';

export default combineReducers({
  comicsReducer,
  oneComic,
  seriesReducer,
  oneSerie
});
