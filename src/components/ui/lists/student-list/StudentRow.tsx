import { Skeleton } from "@mui/material";
import styles from "./student-list.module.scss";
import { FC } from "react";
import { UserInterface } from "@/interfaces/user";
import Image from "next/image";

type Props = {
  id: number;
  user: UserInterface;
};

export const StudentRow: FC<Props> = ({ id, user }) => {
  return (
    <>
      <tr key={id} className={styles.studentList_student}>
        <th className={styles.student_id}>
          {id ? (
            <p>{id}</p>
          ) : (
            <Skeleton width="50%" variant="rectangular" animation="wave" />
          )}
        </th>
        <th className={styles.student_fullName}>
          {user ? (
            <p>{`${user.firstName} ${user.middleName} ${user.lastName}`}</p>
          ) : (
            <Skeleton width="85%" variant="rectangular" animation="wave" />
          )}
        </th>
        <th className={styles.student_avatar}>
          <Image
            src={user.image ? user.image : "/img/profile/avatar.png"}
            width={53}
            height={53}
            alt="students's photo"
          />
        </th>
      </tr>
      <tr>
        <td className={styles.studentList_padding}></td>
      </tr>
    </>
  );
};
