import {
  createAction,
  createReducer,
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";

interface UserInfo {
  uid: any;
  photo: any;
  email: any;
  displayName: any;
}

interface InitialState {
  userInfo: UserInfo | null;
}

//? reducer collection
const user = createSlice({
  //name = actions' prefix
  name: "user",
  initialState: { userInfo: null } as InitialState,

  //deal specific action type like "switch"
  reducers: {
    login: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
    },
  },
});

export const mainReducer = {
  user: user.reducer,
};

export interface CombinedReducerState {
  user: InitialState;
}

export const { login, logout } = user.actions;

export const selectUser = (state: CombinedReducerState) => {
  return state.user;
};
