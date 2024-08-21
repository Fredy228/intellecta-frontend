import { GroupInterface, GroupsInterface } from "@/interfaces/group";
import { DtoCreateGroup } from "@/types/group";
import axios from "axios";

export const createGroup = async (
  idUniversity: number,
  credentials: DtoCreateGroup
): Promise<GroupInterface> => {
  const token = JSON.parse(String(localStorage.getItem("token")));

  const { data } = await axios.post(`/api/group/${idUniversity}`, credentials, {
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const getAllGroups = async (
  idUniversity: number
): Promise<GroupsInterface> => {
  const token = JSON.parse(String(localStorage.getItem("token")));

  const { data } = await axios.get(`/api/group/${idUniversity}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};

export const getOneGroup = async (idGroup: number): Promise<GroupInterface> => {
  const token = JSON.parse(String(localStorage.getItem("token")));

  const { data } = await axios.get(`/api/group/id/${idGroup}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};

export const updateGroup = async (
  idGroup: number,
  credentials: any
): Promise<GroupInterface> => {
  const token = JSON.parse(String(localStorage.getItem("token")));

  const { data } = await axios.patch(`/api/group/${idGroup}`, credentials, {
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};

export const deleteGroup = async (idGroup: number): Promise<GroupInterface> => {
  const token = JSON.parse(String(localStorage.getItem("token")));

  const { data } = await axios.delete(`/api/group/${idGroup}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};
