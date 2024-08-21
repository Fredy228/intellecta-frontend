import React, { FC } from "react";

import styles from "./group-list.module.scss";

import { Skeleton } from "@mui/material";

type Props = {
  id: number;
  name: string;
  level: number;
};

export const GroupRow: FC<Props> = ({ id, name, level }) => {
  return (
    <>
      <tr key={id} className={styles.groupList_group}>
        <th className={styles.group_id}>
          {id ? (
            <p>{id}</p>
          ) : (
            <Skeleton width="50%" variant="rectangular" animation="wave" />
          )}
        </th>
        <th className={styles.group_name}>
          {name ? (
            <p>{name}</p>
          ) : (
            <Skeleton width="85%" variant="rectangular" animation="wave" />
          )}
        </th>
        <th className={styles.group_level}>
          {level ? (
            <p>{level} курс</p>
          ) : (
            <Skeleton width="50%" variant="rectangular" animation="wave" />
          )}
        </th>
      </tr>
      <tr>
        <td className={styles.groupList_padding}></td>
      </tr>
    </>
  );
};
