import { SubjectInterface, SubjectsInterface } from "@/interfaces/subject";
import { TFilter, TSort } from "@/types/teacher";
import $api from "./base";
import { DtoCreateSubject, DtoUpdateSubject } from "@/types/subject";

export const createSubject = async (
  idUniversity: number,
  credentials: DtoCreateSubject
): Promise<SubjectsInterface> => {
  const { data } = await $api.post(
    `/api/subject/one/${idUniversity}`,
    credentials
  );

  return data;
};

export const getAllSubjects = async (
  idUniversity: number,
  range?: number[],
  filter?: TFilter,
  sort?: TSort
): Promise<SubjectsInterface> => {
  const params = new URLSearchParams();

  if (range) params.append("range", JSON.stringify(range));
  if (filter) params.append("filter", JSON.stringify(filter));
  if (sort) params.append("sort", JSON.stringify(sort));

  const { data } = await $api.get(`/api/subject/${idUniversity}`, {
    params,
  });
  return data;
};

export const getSubject = async (
  idSubject: number
): Promise<SubjectInterface> => {
  const { data } = await $api.get(`/api/subject/${idSubject}`);
  return data;
};

export const deleteSubject = async (
  idSubject: number
): Promise<SubjectsInterface> => {
  const { data } = await $api.delete(`/api/subject/${idSubject}`);
  return data;
};

export const updateSubject = async (
  idSubject: number,
  credentials: DtoUpdateSubject
): Promise<SubjectsInterface> => {
  const { data } = await $api.patch(`/api/subject/${idSubject}`, credentials);
  return data;
};
