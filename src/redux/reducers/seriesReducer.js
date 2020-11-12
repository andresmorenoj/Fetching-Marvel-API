const INITIAL_STATE = {
  series: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_SERIES':
      return { ...state, series: action.payload };

    default: return state;
  }
};