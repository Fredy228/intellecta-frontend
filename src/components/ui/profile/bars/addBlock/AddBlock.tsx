import styles from "./addBlock.module.scss";
export const AddBlock = () => {
  return (
    <div className={styles.addWrapper}>
      <button
          className={styles.btnAdd}
          type={"button"}
      ></button>
    </div>
  );
};
