import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "@/interfaces/user";
import { ProfileInterface } from "@/interfaces/profile";
import { RoleEnum } from "@/enums/user/role-enum";

type StateType = {
  isFetchList: boolean;
};

const initialState: StateType = {
  isFetchList: false,
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    listFetch: (state) => {
      state.isFetchList = !state.isFetchList;
    },
  },
});

export const { listFetch } = listSlice.actions;

export default listSlice.reducer;
