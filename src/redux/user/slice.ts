import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "@/interfaces/user";
import { ProfileType } from "@/interfaces/profile";
import { RoleEnum } from "@/enums/user/role-enum";

type StateType = {
  user: Partial<UserInterface> | null;
  profile: ProfileType | null;
  profiles: ProfileType[];
};

const initialState: StateType = {
  user: null,
  profile: {
    id: 1,
    role: RoleEnum.STUDENT,
    title: "Студент ODKU",
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
        payload: UserInterface;
      }
    ) => {
      const { profiles, ...user } = payload;
      state.user = user;
      state.profiles = payload.profiles || [];
    },
    setUserProfile: (state, { payload }) => {
      state.user = { ...state.user, ...payload };
    },
    setCurrentProfile: (state, { payload }: { payload: ProfileType }) => {
      state.profile = payload;
    },
  },
});

export const { removeUser, setUser, setUserProfile, setCurrentProfile } =
  userSlice.actions;

export default userSlice.reducer;
