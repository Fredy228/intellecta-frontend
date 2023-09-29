import { IconProcessing } from "@/components/reused/Icon/Icon";

import styles from "./in-develop.module.scss";
import React, { FC } from "react";

type Props = {
  name: string;
};
const InDevelop: FC<Props> = ({ name }) => {
  return (
    <div className={styles.inDevelop}>
      <p className={styles.inDevelop_text}>
        <IconProcessing /> Розділ "{name}" в розробці <IconProcessing />
      </p>
    </div>
  );
};
export default InDevelop;
