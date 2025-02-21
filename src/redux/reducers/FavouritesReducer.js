import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "../actions/favouritesAction";

const initialState = {
  content: null,
  favouriteSongs: [],
  isFavourite: true,
};

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return { ...state, favouriteSongs: [...state.favouriteSongs, action.payload], isFavourite: true };
    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        favouriteSongs: state.favouriteSongs.filter((_, i) => i !== action.payload),
        isFavourite: false,
      };
    default:
      return state;
  }
};

export default favouritesReducer;
