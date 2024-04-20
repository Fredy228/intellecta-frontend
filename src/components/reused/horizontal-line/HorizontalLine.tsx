import { FC } from "react";
import styles from "./horizontalLine.module.scss";

type Props = {
  color: "main" | "second" | "accent" | "light";
};
export const HorizontalLine: FC<Props> = ({ color }) => {
  return <span className={`${styles.horizontalLine} ${styles[color]}`}></span>;
};
