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
