import { RoleEnum } from "@/enums/user/role-enum";
import { UniversityInterface } from "@/interfaces/university";

export interface ProfileInterface {
  id: number;
  title: string;
  role: RoleEnum;
}

export interface OwnerInterface extends ProfileInterface {
  role: RoleEnum.OWNER_UNIVERSITY;
  university: Pick<
    UniversityInterface,
    "id" | "university_name" | "university_short_name"
  >;
}

export interface ModeratorInterface extends ProfileInterface {
  role: RoleEnum.MODER_UNIVERSITY;
  university: Pick<
    UniversityInterface,
    "id" | "university_name" | "university_short_name"
  >;
}

export interface TeacherInterface extends ProfileInterface {
  role: RoleEnum.TEACHER;
}

export interface StudentInterface extends ProfileInterface {
  role: RoleEnum.STUDENT;
}

export interface MakerInterface extends ProfileInterface {
  role: RoleEnum.MAKER;
}

export type ProfileType =
  | OwnerInterface
  | TeacherInterface
  | StudentInterface
  | ModeratorInterface
  | MakerInterface;
