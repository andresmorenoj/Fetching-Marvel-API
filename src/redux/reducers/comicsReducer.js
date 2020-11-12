const INITIAL_STATE = {
  comics: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_COMICS':
      return { ...state, comics: action.payload };

    default: return state;
  }
};