import app, { AppState } from "./Slices/appSlice";
import user, { UserState } from "./Slices/userSlice";

export const mainReducer = {
  user: user.reducer,
  app: app.reducer,
};

export interface CombinedReducerState {
  user: UserState;
  app: AppState;
}

export const selectUser = (state: CombinedReducerState) => {
  return state.user;
};

export const selectApp = (state: CombinedReducerState) => {
  return state.app;
};
