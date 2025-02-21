import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/FavouritesReducer";
import searchReducer from "../reducers/searchReducer";

const reducerStore = combineReducers({
  favourites: favouritesReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: reducerStore,
});

export default store;
