import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducerStore = combineReducers({});

const store = configureStore({
  reducer: reducerStore,
});

export default store;
