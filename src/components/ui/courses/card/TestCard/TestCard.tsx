import { type FC } from "react";

import styles from "./TestCard.module.scss";

import { ITestList } from "../list";

export const TestCard: FC<ITestList> = ({ images, title, description }) => {
  return (
    <li className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardImg}>{images}</div>
        <div>
          <h1 className={styles.cardTitle}>{title}</h1>
          <p className={styles.descriptions}>{description}</p>
        </div>
      </div>
    </li>
  );
};
