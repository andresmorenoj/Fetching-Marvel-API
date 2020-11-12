const INITIAL_STATE = {
  oneSerie: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_ONE_SERIE':
      return { ...state, oneSerie: action.payload };

    default: return state;
  }
};