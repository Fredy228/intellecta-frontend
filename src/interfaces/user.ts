import { RoleEnum } from "@/enums/user/role-enum";

export interface UserInterface {
  id: string;
  email: string;
  role: RoleEnum;
  sex: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  birthday: string;
  photo: string | null;
}
