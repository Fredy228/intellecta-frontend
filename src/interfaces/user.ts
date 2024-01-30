import { RoleEnum } from "@/enums/user/role-enum";

export interface UserInterface {
  id: number;
  email: string;
  role: RoleEnum;
  sex: number | null;
  firstName: string;
  lastName: string;
  middleName: string | null;
  image: string | null;
  verified: 0 | 1;
  accessToken: string;
  refreshToken: string;
  currentDevice?: UserDeviceInterface;
  devices?: Array<UserDeviceInterface>;
}

export interface UserDeviceInterface {
  id: number;
  deviceModel: string | null;
  createAt: Date;
  token: string;
  userId: number;
}

export interface SessionInterface {
  id: string;
  email: string;
  image: string;
  name: string;
  accessToken: string;
  refreshToken: string;
}
