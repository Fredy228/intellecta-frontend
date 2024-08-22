import axios from "axios";

import { TeacherInterface, TeachersInterface } from "@/interfaces/teacher";
import { DtoCreateTeacher, TFilter, TSort } from "@/types/teacher";

export const createOneTeacher = async (
  credentials: DtoCreateTeacher,
  idUniversity: number
): Promise<TeacherInterface> => {
  const token = JSON.parse(String(localStorage.getItem("token")));

  const { data } = await axios.post(
    `/api/teacher/one/${idUniversity}`,
    credentials,
    {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

export const getAllTeachers = async (
  idUniversity: number,
  range?: number[],
  filter?: TFilter,
  sort?: TSort
): Promise<TeachersInterface> => {
  const params = new URLSearchParams();
  const token = JSON.parse(String(localStorage.getItem("token")));

  if (range) params.append("range", JSON.stringify(range));
  if (filter) params.append("filter", JSON.stringify(filter));
  if (sort) params.append("sort", JSON.stringify(sort));

  const { data } = await axios.get(`/api/teacher/${idUniversity}`, {
    params,
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};

export const deleteTeacher = async (
  idTeacher: number
): Promise<TeacherInterface> => {
  const token = JSON.parse(String(localStorage.getItem("token")));

  const { data } = await axios.delete(`/api/teacher/${idTeacher}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
