import { UserInterface } from "./user";

export interface StudentInterface {
  id: number;
  title: string;
  user: UserInterface;
}

export interface StudentsInterface {
  data: StudentInterface[];
  total: number;
}
