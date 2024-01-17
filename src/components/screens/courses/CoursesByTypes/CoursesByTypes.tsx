import SupBar from "@/components/ui/courses/bars/SupBar";
import { CourseTypeItem } from "@/components/ui/courses/card/CourseTypeItem/CourseTypeItem";
import {
  AllCoursesType,
  IFrontCourses,
} from "@/components/ui/courses/card/list";
import styles from "../courses.module.scss";
import Link from "next/link";
import { IconBack } from "@/components/reused/Icon/Icon";

export default function CoursesByTypes({
  typeCourses,
}: {
  typeCourses: string;
}) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.backMenu}>
          <IconBack />
          <Link href={`/dashboard/courses/`}>Повернутися</Link>
        </div>
        <div>
          <h1 className={styles.titlePage}>Нові курси вже доступні</h1>
        </div>
      </div>
      <SupBar />
      <div className={styles.cardWrapper}>
        {AllCoursesType[typeCourses]
          ? AllCoursesType[typeCourses].map((courses: IFrontCourses) => (
              <CourseTypeItem {...courses} />
            ))
          : "Not found"}
      </div>
    </div>
  );
}
