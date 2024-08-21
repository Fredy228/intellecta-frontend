"use client";

import { getAllStudents } from "@/axios/students";
import styles from "./student-list.module.scss";
import { StudentRow } from "./StudentRow";

export const StudentList = async () => {
  const students = await getAllStudents(1, 2);
  console.log(students);

  return (
    <>
      <table className={styles.studentList}>
        <thead className={styles.studentList_header}>
          <tr>
            <th className={styles.studentList_headerText}>
              <p>ID</p>
            </th>
            <th className={styles.studentList_headerText}>
              <p>ФІО</p>
            </th>
            <th className={styles.studentList_headerText}>
              <p>Аватар</p>
            </th>
          </tr>
          <tr>
            <td className={styles.studentList_padding}></td>
          </tr>
          <tr>
            <td className={styles.studentList_line}></td>
          </tr>
          <tr>
            <td className={styles.studentList_padding}></td>
          </tr>
        </thead>
      </table>
      <div className={styles.studentList_students}>
        <table>
          <tbody className={styles.studentList_body}>
            {students.data.map(({ id, user }) => (
              <StudentRow key={id} id={id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
