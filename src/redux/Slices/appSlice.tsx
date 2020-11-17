import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ChatList {
  channelId?: string;
  channelName?: string;
}

export interface AppState {
  channelInfo?: ChatList[];
  selectedChannelInfo?: ChatList;
}

//? reducer collection
const app = createSlice({
  //name = actions' prefix
  name: "app",
  initialState: {
    channelInfo: undefined,
    selectedChannelInfo: undefined,
  } as AppState,

  //deal specific action type like "switch"
  reducers: {
    setChannelList: (state, action: PayloadAction<ChatList[]>) => {
      state.channelInfo = action.payload;
    },
    selectedChannelInfo: (state, action: PayloadAction<ChatList>) => {
      state.selectedChannelInfo = action.payload;
    },
  },
});

export default app;

export const { setChannelList, selectedChannelInfo } = app.actions;
