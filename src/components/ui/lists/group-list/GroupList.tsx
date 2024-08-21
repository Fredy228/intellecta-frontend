"use client";

import { getAllGroups } from "@/axios/group";

import styles from "./group-list.module.scss";
import { GroupRow } from "./GroupRow";

export const GroupList = async () => {
  const groups = await getAllGroups(1);

  return (
    <>
      <table className={styles.groupList}>
        <thead className={styles.groupList_header}>
          <tr>
            <th className={styles.groupList_headerText}>
              <p>ID</p>
            </th>
            <th className={styles.groupList_headerText}>
              <p>Назва</p>
            </th>
            <th className={styles.groupList_headerText}>
              <p>Номер курсу</p>
            </th>
          </tr>
          <tr>
            <td className={styles.groupList_padding}></td>
          </tr>
          <tr>
            <td className={styles.groupList_line}></td>
          </tr>
          <tr>
            <td className={styles.groupList_padding}></td>
          </tr>
        </thead>
      </table>
      <div className={styles.groupList_groups}>
        <table>
          <tbody className={styles.groupList_body}>
            {groups.data.map(({ id, name, level }) => (
              <GroupRow key={id} id={id} name={name} level={level} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
