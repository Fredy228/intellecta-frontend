import { RootState } from "@/redux/store";

export const selectUser = (state: RootState) => state.user.user;
export const selectProfile = (state: RootState) => state.user.profile;
export const selectProfiles = (state: RootState) => state.user.profiles;
