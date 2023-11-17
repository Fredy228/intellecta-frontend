import type { FC } from "react";

import styles from "./widget-grade.module.scss";
import { IconColorCircle } from "@/components/reused/Icon/Icon";

type Props = {};
const WidgetGrade: FC = () => {
  return (
    <div className={styles.widgetGrade}>
      <IconColorCircle />
      <p className={styles.widgetGrade_value}>10,7</p>
    </div>
  );
};
export default WidgetGrade;
