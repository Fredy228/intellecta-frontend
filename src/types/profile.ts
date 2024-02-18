import { TAchievement } from "@/components/ui/profile/bars/skills/achievements/achieveList";

export type TUniversityProfile = {
  type: "university";
  id: number;
  name: string;
  shortName: string;
  univType: "college" | "university";
  info: TUniversityContacts;
  teachers: number;
  students: number;
  rating: number;
  image: string;
};

export type TUniversityContacts = {
  rector: string | null;
  mail: string | null;
  location: string | null;
  link: string | null;
  foundationYear: number | null;
};

export type TStudentProfile = {
  type: "student";
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  subtitle: string;
  friends: number;
  rating: number;
  skills: string[];
  info: TStudentContacts;
  achievements: TAchievement[];
  avatar: string | null;
};

export type TStudentContacts = {
  mail: string | null;
  tel: string | null;
  link: string | null;
  location: string | null;
  birthday: string | null;
};
