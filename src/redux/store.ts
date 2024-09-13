import { configureStore } from "@reduxjs/toolkit";

import userReducer from "@/redux/user/slice";
import paramReducer from "@/redux/slice-param";
import listReducer from "@/redux/list/slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    param: paramReducer,
    list: listReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
