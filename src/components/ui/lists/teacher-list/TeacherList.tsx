"use client";

import { getAllTeachers } from "@/axios/teacher";

import styles from "./teacher-list.module.scss";

import { TeacherRow } from "./TeacherRow";

export const TeacherList = async () => {
  const teachers = await getAllTeachers(1, [1, 5]);

  return (
    <>
      <table className={styles.teacherList}>
        <thead className={styles.teacherList_header}>
          <tr>
            <th className={styles.teacherList_headerText}>
              <p>ID</p>
            </th>
            <th className={styles.teacherList_headerText}>
              <p>ФІО</p>
            </th>
            <th className={styles.teacherList_headerText}>
              <p>Аватар</p>
            </th>
          </tr>
          <tr>
            <td className={styles.teacherList_padding}></td>
          </tr>
          <tr>
            <td className={styles.teacherList_line}></td>
          </tr>
        </thead>
      </table>
      <div className={styles.teacherList_teachers}>
        <table>
          <tbody className={styles.teacherList_body}>
            {teachers.data.map(({ id, user }) => (
              <TeacherRow key={id} id={id} user={user} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
