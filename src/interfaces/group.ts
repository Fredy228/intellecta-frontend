import { UniversityInterface } from "./university";

export interface GroupInterface {
  id: number;
  name: string;
  level: number;
  start_date: string;
  end_date: string;
  university: UniversityInterface;
  createAt: string;
  updateAt: string;
}

export interface GroupsInterface {
  data: GroupInterface[];
  total: number;
}
