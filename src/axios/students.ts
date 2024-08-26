import { StudentInterface, StudentsInterface } from "@/interfaces/student";
import { DtoCreateStudent, DtoUpdateStudent } from "@/types/student";
import { TFilter, TSort } from "@/types/teacher";
import $api from "./base";

export const createStudent = async (
  idUniversity: number,
  idGroup: number,
  credentials: DtoCreateStudent
): Promise<StudentInterface> => {
  const { data } = await $api.post(
    `/api/student/one/${idUniversity}?idGroup=${idGroup}`,
    credentials
  );

  return data;
};

export const getAllStudents = async (
  idUniversity: number,
  idGroup: number,
  range?: number[],
  filter?: TFilter,
  sort?: TSort
): Promise<StudentsInterface> => {
  const params = new URLSearchParams();

  if (range) params.append("range", JSON.stringify(range));
  if (filter) params.append("filter", JSON.stringify(filter));
  if (sort) params.append("sort", JSON.stringify(sort));

  const { data } = await $api.get(
    `/api/student/${idUniversity}?idGroup=${idGroup}`,
    {
      params,
    }
  );
  return data;
};

export const deleteStudent = async (
  idStudent: number
): Promise<StudentInterface> => {
  const { data } = await $api.delete(`/api/student/${idStudent}`);
  return data;
};

export const updateStudent = async (
  idStudent: number,
  credentials: DtoUpdateStudent
): Promise<StudentInterface> => {
  const { data } = await $api.patch(`/api/student/${idStudent}`, credentials);
  return data;
};
