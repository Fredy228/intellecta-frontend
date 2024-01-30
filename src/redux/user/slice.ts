import { createSlice } from "@reduxjs/toolkit";
import { getMe } from "@/redux/user/operations";
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
  currentDevice: undefined,
  devices: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: () => {
      return { ...initialState };
    },
    setUserAgent: (state, { payload }: { payload: string }) => {
      if (state.currentDevice) state.currentDevice.deviceModel = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMe.fulfilled, (_state, { payload }) => {
      if (payload) {
        return { ...payload };
      }
    });
  },
});

export const { removeUser, setUserAgent } = userSlice.actions;

export default userSlice.reducer;
