import { UserInterface } from "./user";

export interface TeacherInterface {
  id: number;
  title: string;
  user: UserInterface;
}

export interface TeachersInterface {
  data: TeacherInterface[];
  total: number;
}
