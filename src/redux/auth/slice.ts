import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: null,
    email: "",
    password: null,
    role: "",
    sex: null,
    firstName: "",
    lastName: "",
    middleName: null,
    birthday: "",
    photo: null,
  },
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      console.log("payload", payload);
      state.user = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(logIn.fulfilled, (state, { payload }) => {
  //     if (payload) {
  //       state.user = payload.user;
  //       state.token = payload.token;
  //     }
  //   });
  // },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
