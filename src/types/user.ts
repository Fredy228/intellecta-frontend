import { CountryCode } from "libphonenumber-js";

export type DtoUpdateUser = {
  sex: 0 | 1 | null;
  firstName: string;
  lastName: string;
  middleName: string | null;
  bio: string;
  birthday: string;
  phone: {
    country: CountryCode;
    number: string;
  };
};

export type TPasswordBody = {
  password: string;
};

export type TEmailBody = {
  email: string;
};

export type UserFilterType = {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  email?: string;
};
