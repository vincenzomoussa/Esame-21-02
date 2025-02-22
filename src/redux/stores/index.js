import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/FavouritesReducer";
import playerReducer from "../reducers/PlayerReducer";
import searchReducer from "../reducers/searchReducer";

const reducerStore = combineReducers({
  favourites: favouritesReducer,
  player: playerReducer,
  search: searchReducer,
});

const store = configureStore({
  reducer: reducerStore,
});

export default store;
