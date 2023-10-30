export type TListsItem = {
  id: number;
  photoUrl: string;
  firstName: string;
  lastName: string;
  middleName: string | null;
};

export const listTeacher: TListsItem[] = [
  {
    id: 1,
    photoUrl: `${process.env.NEXTAUTH_URL}/img/avatars/avatar-teacher-test.png`,
    firstName: "Марина",
    lastName: "Алексеєва",
    middleName: "Леонідівна",
  },
  {
    id: 2,
    photoUrl: `${process.env.NEXTAUTH_URL}/img/avatars/avatar-teacher-test.png`,
    firstName: "Максим",
    lastName: "Іванов",
    middleName: "Олексійович",
  },
  {
    id: 3,
    photoUrl: `${process.env.NEXTAUTH_URL}/img/avatars/avatar-teacher-test.png`,
    firstName: "Кармазін",
    lastName: "Олексій",
    middleName: "Максимович",
  },
];
