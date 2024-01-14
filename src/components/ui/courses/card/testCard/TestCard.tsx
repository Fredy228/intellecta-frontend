import styles from "./TestCard.module.scss";
import Image from "next/image";
import { ITestList } from "../list";
import { FC } from "react";

export const TestCard: FC<ITestList> = ({ id, images, title, description }) => {
  return (
    <ul key={id} className={styles.card}>
      <div className={styles.cardTop}>
        <Image
          src={images ? images : ""}
          width={45}
          height={67}
          alt="Courses image"
          className={styles.cardImg}
        />
        <div>
          <h1 className={styles.cardTitle}>{title}</h1>
          <li className={styles.descriptions}>{description}</li>
        </div>
      </div>
    </ul>
  );
};
