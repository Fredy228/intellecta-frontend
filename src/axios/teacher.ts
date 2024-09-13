import { TeacherInterface, TeachersInterface } from "@/interfaces/teacher";
import { DtoCreateTeacher, TFilter, TSort } from "@/types/teacher";
import $api from "./base";

export const createManyTeachers = async (
  formData: FormData,
  idUniversity: number
): Promise<TeacherInterface> => {
  const { data } = await $api.post(
    `/api/teacher/many/${idUniversity}`,
    formData
  );
  return data;
};

export const createOneTeacher = async (
  credentials: DtoCreateTeacher,
  idUniversity: number
): Promise<TeacherInterface> => {
  const { data } = await $api.post(
    `/api/teacher/one/${idUniversity}`,
    credentials
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

  if (range) params.append("range", JSON.stringify(range));
  if (filter) params.append("filter", JSON.stringify(filter));
  if (sort) params.append("sort", JSON.stringify(sort));

  const { data } = await $api.get(`/api/teacher/${idUniversity}`, { params });

  return data;
};

export const deleteTeacher = async (
  idTeacher: number
): Promise<TeacherInterface> => {
  const { data } = await $api.delete(`/api/teacher/${idTeacher}`);
  return data;
};
