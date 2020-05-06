const INITIAL_STATE = {
  user: {
    id: null,
    name: null,
    age: null,
  },
  fetching: false,
  fetched: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_USER": {
      return { ...state, fetching: true };
    }
    case "FETCH_USER_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
