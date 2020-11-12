const INITIAL_STATE = {
  oneComic: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_ONE_COMIC':
      return { ...state, oneComic: action.payload };

    default: return state;
  }
};