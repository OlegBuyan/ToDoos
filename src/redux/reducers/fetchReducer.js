export const initialFetchState = {
  todoos: [],
  loading: false,
  error: null,
};

export const fetchReducer = (state = initialFetchState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TODOOS_REQUEST":
      return { ...state, loading: true, error: null };
    case "TODOOS_SUCCESS":
      return { ...state, loading: false, todoos: payload };
    case "TODOOS_ERROR":
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
