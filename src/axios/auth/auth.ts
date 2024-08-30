import $authAPI from "./base";
import $api from "../base";

import { TLoginBody, TRegisterBody } from "@/types/auth/auth-types";
import { UserInterface } from "@/interfaces/user";
import { TPasswordBody } from "@/types/user";
import axios from "axios";

export const loginUser = async (
  credentials: TLoginBody,
): Promise<UserInterface> => {
  const { data } = await $authAPI.post("/api/auth/login", credentials);
  return data;
};

export const registerUser = async (
  credentials: TRegisterBody,
): Promise<UserInterface> => {
  const { data } = await $authAPI.post("/api/auth/register", credentials);
  return data;
};

export const refreshToken = async (): Promise<{
  accessToken: string;
  refreshToken: string;
}> => {
  const { data } = await $authAPI.get("/api/auth/refresh");

  return data;
};

export const logoutUser = async (): Promise<void> => {
  await $api.get("/api/auth/logout");
};

export const updateUserPassword = async (
  credentials: TPasswordBody,
  key: string,
) => {
  await $authAPI.patch(`/api/auth/restore-pass/${key}`, credentials);
};
