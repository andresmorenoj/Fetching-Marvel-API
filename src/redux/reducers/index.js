import { combineReducers } from 'redux';
import comicsReducer from './comicsReducer';
import oneComic from './oneComic';

export default combineReducers({
  comicsReducer,
  oneComic
});
