import { FC } from "react";
import Image from "next/image";
import { Skeleton } from "@mui/material";

import styles from "./teacher-list.module.scss";
import { UserInterface } from "@/interfaces/user";

type Props = {
  id: number;
  user: UserInterface;
};

export const TeacherRow: FC<Props> = ({ id, user }) => {
  return (
    <>
      <tr>
        <td className={styles.teacherList_padding}></td>
      </tr>
      <tr key={id} className={styles.teacherList_teacher}>
        <th className={styles.teacher_id}>
          {id ? (
            <p>{id}</p>
          ) : (
            <Skeleton width="50%" variant="rectangular" animation="wave" />
          )}
        </th>
        <th className={styles.teacher_fullName}>
          {user ? (
            <p>{`${user.firstName} ${user.middleName} ${user.lastName}`}</p>
          ) : (
            <Skeleton width="85%" variant="rectangular" animation="wave" />
          )}
        </th>
        <th className={styles.teacher_avatar}>
          <Image
            src={user.image ? user.image : "/img/profile/avatar.png"}
            width={53}
            height={53}
            alt="teacher's photo"
          />
        </th>
      </tr>
    </>
  );
};
