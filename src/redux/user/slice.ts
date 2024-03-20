import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "@/interfaces/user";
import { ProfileInterface } from "@/interfaces/profile";

type StateType = {
  user: UserInterface | null;
  profile: ProfileInterface | null;
};

const initialState: StateType = {
  user: null,
  profile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: () => {
      return { ...initialState };
    },
    setUser: (state, { payload }: { payload: UserInterface }) => {
      state.user = payload;
    },
  },
});

export const { removeUser, setUser } = userSlice.actions;

export default userSlice.reducer;
