import { createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "@/interfaces/user";
import { RoleEnum } from "@/enums/user/role-enum";

const initialState: UserInterface = {
  id: 0,
  email: "",
  firstName: "",
  lastName: "",
  middleName: null,
  role: RoleEnum.STUDENT,
  sex: null,
  image: null,
  verified: 0,
  accessToken: "",
  refreshToken: "",
  devices: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: () => {
      return { ...initialState };
    },
    setUser: (_state, { payload }: { payload: UserInterface }) => {
      return { ...payload };
    },
  },
});

export const { removeUser, setUser } = userSlice.actions;

export default userSlice.reducer;
