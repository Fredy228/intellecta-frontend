import { RoleEnum } from "@/enums/user/role-enum";

export interface ProfileInterface {
  id: number;
  role: RoleEnum;
  title: string;
}
