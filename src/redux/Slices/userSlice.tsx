import {
  createAction,
  createReducer,
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";

interface UserInfo {
  uid?: string | null;
  photo?: string | null;
  email?: string | null;
  displayName?: string | null;
}

export interface UserState {
  userInfo?: UserInfo;
}

//? reducer collection
const user = createSlice({
  //name = actions' prefix
  name: "user",
  initialState: { userInfo: undefined } as UserState,

  //deal specific action type like "switch"
  reducers: {
    login: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = undefined;
    },
  },
});

export default user;

export const { login, logout } = user.actions;
