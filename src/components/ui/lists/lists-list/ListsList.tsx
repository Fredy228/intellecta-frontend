import { type FC } from "react";
import Image from "next/image";

import styles from "./lists-list.module.scss";

import { listTeacher } from "@/components/ui/lists/lists-list/list-lists";

const ListsList: FC = () => {
  return (
    <ul className={styles.list}>
      {listTeacher.map((i) => (
        <li key={i.id} className={styles.list_item}>
          <Image
            className={styles.list_img}
            src={i.photoUrl}
            alt={"Avatar"}
            width={128}
            height={128}
          />

          <p className={styles.list_text}>
            {i.lastName} {i.firstName} {i?.middleName}
          </p>
        </li>
      ))}
    </ul>
  );
};
export default ListsList;
