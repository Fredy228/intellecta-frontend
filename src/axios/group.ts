import { GroupInterface, GroupsInterface } from "@/interfaces/group";
import { DtoCreateGroup } from "@/types/group";
import $api from "./base";
import { TFilter, TSort } from "@/types/teacher";

export const createGroup = async (
  idUniversity: number,
  credentials: DtoCreateGroup
): Promise<GroupInterface> => {
  const { data } = await $api.post(`/api/group/${idUniversity}`, credentials);
  return data;
};

export const getAllGroups = async (
  idUniversity: number,
  range?: number[],
  filter?: TFilter,
  sort?: TSort,
  idGroup?: number
): Promise<GroupsInterface> => {
  const params = new URLSearchParams();

  if (range) params.append("range", JSON.stringify(range));
  if (filter) params.append("filter", JSON.stringify(filter));
  if (sort) params.append("sort", JSON.stringify(sort));
  if (idGroup) params.append("idGroup", JSON.stringify(idGroup));

  const { data } = await $api.get(`/api/group/${idUniversity}`, { params });
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
