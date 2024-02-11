import { configureStore } from "@reduxjs/toolkit";

import userReducer from "@/redux/user/slice";
import paramReducer from "@/redux/slice-param";

export const store = configureStore({
  reducer: {
    user: userReducer,
    param: paramReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
