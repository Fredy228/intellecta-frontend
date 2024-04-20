import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "@/interfaces/user";
import { ProfileInterface } from "@/interfaces/profile";
import { RoleEnum } from "@/enums/user/role-enum";

type StateType = {
  user: Partial<UserInterface> | null;
  profile: ProfileInterface | null;
  profiles: ProfileInterface[];
};

const initialState: StateType = {
  user: null,
  profile: {
    id: 1,
    role: RoleEnum.STUDENT,
    title: "ODKU",
  },
  profiles: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: () => {
      return { ...initialState };
    },
    setUser: (
      state,
      {
        payload,
      }: {
        payload: {
          user: UserInterface;
          profiles: ProfileInterface[];
        };
      },
    ) => {
      state.user = payload.user;
      state.profiles = payload.profiles;
    },
    setUserProfile: (state, { payload }) => {
      state.user = { ...state.user, ...payload };
    },
  },
});

export const { removeUser, setUser, setUserProfile } = userSlice.actions;

export default userSlice.reducer;
