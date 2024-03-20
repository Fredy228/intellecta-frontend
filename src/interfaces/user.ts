import { ProfileInterface } from "@/interfaces/profile";

export interface UserInterface {
  id: number;
  email: string;
  sex: 0 | 1 | null;
  firstName: string;
  lastName: string;
  middleName: string | null;
  image: string | null;
  verified: boolean;
  settings: {
    restorePassAt: Date | null;
    code: string;
  };
  accessToken: string;
  refreshToken: string;
  devices?: UserDeviceInterface[];
  profiles?: ProfileInterface[];
}

export interface UserDeviceInterface {
  id: number;
  deviceModel: string | null;
  createAt: Date;
  token: string;
  userId: number;
}
