import styles from "./addBlock.module.scss";
import { IconAdd } from "@/components/reused/Icon/Icon";
export const AddBlock = () => {
  return (
    <div className={styles.addWrapper}>
      <button className={styles.btnAdd}>
        <IconAdd />
      </button>
    </div>
  );
};
