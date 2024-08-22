import { StudentInterface, StudentsInterface } from "@/interfaces/student";
import { DtoCreateStudent, DtoUpdateStudent } from "@/types/student";
import { TFilter, TSort } from "@/types/teacher";
import axios from "axios";

export const createStudent = async (
  idUniversity: number,
  idGroup: number,
  credentials: DtoCreateStudent
): Promise<StudentInterface> => {
  const token = JSON.parse(String(localStorage.getItem("token")));

  const { data } = await axios.post(
    `/api/student/one/${idUniversity}?idGroup=${idGroup}`,
    credentials,
    {
      withCredentials: true,
      headers: { Authorization: `Bearer ${token}` },
    }
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
  const token = JSON.parse(String(localStorage.getItem("token")));

  if (range) params.append("range", JSON.stringify(range));
  if (filter) params.append("filter", JSON.stringify(filter));
  if (sort) params.append("sort", JSON.stringify(sort));

  const { data } = await axios.get(
    `/api/student/${idUniversity}?idGroup=${idGroup}`,
    {
      params,
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

export const deleteStudent = async (
  idStudent: number
): Promise<StudentInterface> => {
  const token = JSON.parse(String(localStorage.getItem("token")));

  const { data } = await axios.delete(`/api/student/${idStudent}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const updateStudent = async (
  idStudent: number,
  credentials: DtoUpdateStudent
): Promise<StudentInterface> => {
  const token = JSON.parse(String(localStorage.getItem("token")));

  const { data } = await axios.patch(`/api/student/${idStudent}`, credentials, {
    withCredentials: true,
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
};
