export type DtoCreateStudent = {
  email: string;
};

export type DtoUpdateStudent = {
  groupId: number;
};

export type TStudentList = {
  id: number;
  fullName: string;
  email: string;
  avatar: string;
};
