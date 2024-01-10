import styles from "../courses.module.scss";
import { CoursesByIdItem } from "@/components/ui/courses/card/CoursesByIditem/CoursesByIdItem";
import Link from "next/link";
import { courseByIdAndNamed } from "@/components/ui/courses/card/list";
import { throws } from "node:assert";
export default function CoursesById({ idCourse }: { idCourse: string }) {
  return (
    <div>
      <Link href={`/dashboard/courses/`}>Повернутися</Link>
      <h2>нові курси вже доступні</h2>

      <div className={styles.cardWrapper}>
        {courseByIdAndNamed.map((courses) =>
          idCourse == courses.id ? <CoursesByIdItem {...courses} /> : null,
        )}
      </div>
    </div>
  );
}
