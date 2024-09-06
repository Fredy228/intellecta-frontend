export interface SubjectInterface {
  id: number;
  name: string;
  short_name: string;
  icon_name: string | null;
}

export interface SubjectsInterface {
  data: SubjectInterface[];
  total: number;
}
