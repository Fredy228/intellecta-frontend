export type TBaseAuthBody = {
  email: string;
  password: string;
};

export type TLoginBody = {} & TBaseAuthBody;

export type TRegisterBody = {
  firstName: string;
  lastName: string;
} & TBaseAuthBody;

export type TGoogleAuth = {
  email: string;
  firstName: string;
  lastName: string;
  image?: string;
};

export type TGoogleProfile = {
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
};
