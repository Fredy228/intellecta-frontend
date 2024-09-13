export type TSubjectList = {
  id: number;
  name: string;
  short_name: string;
  icon_name: string;
};

export type SubjectFilterType = {
  name?: string;
  short_name?: string;
};

export type DtoCreateSubject = {
  name: string;
  short_name: string;
  icon_name: string | null;
};

export type DtoUpdateSubject = {
  idSubject: number;
};
