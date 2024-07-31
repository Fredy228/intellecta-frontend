export enum RoleEnum {
  OWNER_UNIVERSITY = "owner_university",
  MODER_UNIVERSITY = "moder_university",
  STUDENT = "student",
  TEACHER = "teacher",
  MAKER = "maker",
}

export const RoleValues = {
  [RoleEnum.OWNER_UNIVERSITY]: "Власник",
  [RoleEnum.MODER_UNIVERSITY]: "Адміністратор",
  [RoleEnum.STUDENT]: "Студент",
  [RoleEnum.TEACHER]: "Викладач",
  [RoleEnum.MAKER]: "Творець",
};
