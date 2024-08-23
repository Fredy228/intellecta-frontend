export type DtoCreateTeacher = {
  email: string;
  job_title: string;
};

export type TTeacherList = {
  id: number;
  fullName: string;
  avatar: string;
};

export type TFilter = {
  [key: string]: string;
};

export type TSort = {
  [key: string]: "ASC" | "DESC";
};
