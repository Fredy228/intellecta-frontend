import { GroupInterface, GroupsInterface } from "@/interfaces/group";
import { DtoCreateGroup } from "@/types/group";
import $api from "./base";

export const createGroup = async (
  idUniversity: number,
  credentials: DtoCreateGroup
): Promise<GroupInterface> => {
  const { data } = await $api.post(`/api/group/${idUniversity}`, credentials);
  return data;
};

export const getAllGroups = async (
  idUniversity: number
): Promise<GroupsInterface> => {
  const { data } = await $api.get(`/api/group/${idUniversity}`);
  return data;
};

export const getOneGroup = async (idGroup: number): Promise<GroupInterface> => {
  const { data } = await $api.get(`/api/group/id/${idGroup}`);
  return data;
};

export const updateGroup = async (
  idGroup: number,
  credentials: any
): Promise<GroupInterface> => {
  const { data } = await $api.patch(`/api/group/${idGroup}`, credentials);
  return data;
};

export const deleteGroup = async (idGroup: number): Promise<GroupInterface> => {
  const { data } = await $api.delete(`/api/group/${idGroup}`);
  return data;
};
