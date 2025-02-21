const initialState = {
  query: "",
  results: [],
  loading: false,
  error: null,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_START":
      return {
        ...state,
        loading: true,
        error: null,
        isSearchOn: true,
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        results: action.payload,
        error: null,
        isSearchOn: true,
      };
    case "SEARCH_FAIL":
      return {
        ...state,
        loading: false,
        error: action.payload,
        isSearchOn: false,
      };
    default:
      return state;
  }
}
