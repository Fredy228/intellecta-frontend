export type DtoCreateTeacher = {
  email: string;
  job_title: string;
};

export type TFilter = {
  [key: string]: string;
};

export type TSort = {
  [key: string]: "ASC" | "DESC";
};
