import $api from "@/axios/base";
import { UserInterface } from "@/interfaces/user";
import { ProfileInterface } from "@/interfaces/profile";
import { DtoUpdateUser } from "@/types/user";

export const getUser = async (): Promise<{
  user: UserInterface;
  profiles: ProfileInterface[];
}> => {
  const { data } = await $api.get("/api/user");

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
