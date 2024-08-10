import $api from "@/axios/base";
import { UserInterface } from "@/interfaces/user";
import { DtoUpdateUser, TPasswordBody } from "@/types/user";
import axios from "axios";

export const getUser = async (): Promise<UserInterface> => {
  const { data } = await $api.get<UserInterface>("/api/user");

  return data;
};

export const getUserProfile = async (): Promise<
  Pick<
    UserInterface,
    | "id"
    | "firstName"
    | "lastName"
    | "middleName"
    | "email"
    | "sex"
    | "bio"
    | "birthday"
  >
> => {
  const { data } = await $api.get("/api/user/profile");

  return data;
};

export const updateUserProfile = async (body: Partial<DtoUpdateUser>) => {
  await $api.patch("/api/user", body);
};

export const updateUserPassword = async (
  credentials: TPasswordBody,
  key: string
) => {
  const { data } = await axios.patch(
    `/api/auth/restore-pass/${key}`,
    credentials,
    {
      withCredentials: true,
    }
  );
  return data;
};
