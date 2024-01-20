import styles from "./addBlockSecond.module.scss";
import { IconAdd } from "@/components/reused/Icon/Icon";
export const AddBlockSecond = () => {
  return (
    <div className={styles.addWrapper}>
      <button className={styles.btnAdd}>
        <IconAdd />
      </button>
    </div>
  );
};
