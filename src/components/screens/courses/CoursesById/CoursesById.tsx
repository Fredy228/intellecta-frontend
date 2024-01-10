import styles from "../courses.module.scss";
import { CoursesByIdItem } from "@/components/ui/courses/card/CoursesByIditem/CoursesByIdItem";
import { FrontEndCurses } from "@/components/ui/courses/card/list";
export default function CoursesById({ idCourse }: { idCourse: string }) {
  const listPage = FrontEndCurses.find((i) => idCourse === i.id);

  return (
    <div>
      <div className={styles.cardWrapper}>
        <CoursesByIdItem {...listPage} />
      </div>
    </div>
  );
}
