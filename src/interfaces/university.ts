export interface UniversityInterface {
  id: number;
  university_id: number | null;
  university_parent_id: number | null;
  university_name: string;
  university_short_name: string;
  registration_year: number | null;
  post_index_u: number | null;
  contacts: string[];
  university_site: string | null;
  count_students: number;
  count_teachers: number;
  createAt: string;
  updateAt: string;
}
