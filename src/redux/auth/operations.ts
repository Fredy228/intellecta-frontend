import { createAsyncThunk } from "@reduxjs/toolkit";
import * as axios from "@/axios/auth";
import { TLoginBody } from "@/types/auth/login-body";

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials: TLoginBody, { rejectWithValue }) => {
    try {
      return await axios.loginUser(credentials);
    } catch (error) {
      return rejectWithValue("Помилка входу");
    }
  },
);
