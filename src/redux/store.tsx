import { configureStore } from "@reduxjs/toolkit";
//import { combineReducers } from "redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import { mainReducer } from "./mainReducer";

//? I remove comibneReducer method because
//! it can be replaced with createSlice <--- awesome
//const combine = combineReducers(userReducer);

const middleware = [logger, ReduxThunk];

export const createStore = () => {
  const store = configureStore({
    reducer: mainReducer,
    middleware,
  });
  return store;
};
