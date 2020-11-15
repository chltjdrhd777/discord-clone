import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";
import { mainReducer } from "./mainReducer";

const combine = combineReducers(mainReducer);

const middleware = [logger, ReduxThunk];

export const createStore = () => {
  const store = configureStore({
    reducer: combine,
    middleware,
  });
  return store;
};
