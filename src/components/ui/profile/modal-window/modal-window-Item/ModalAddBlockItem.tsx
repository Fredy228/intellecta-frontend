import { type FC } from "react";

import styles from "./modal-add-block-item.module.scss";

import { TBlockInfo } from "@/components/ui/profile/modal-window/lists";

export const ModalAddBlockItem: FC<TBlockInfo> = ({ named, icon }) => {
  return (
    <li className={styles.itemAddBlock}>
      <button type={"button"} className={styles.itemAddBlock_btn}>
        <div className={styles.itemAddBlock_img}>{icon}</div>
        <span className={styles.itemAddBlock_name}>{named}</span>
      </button>
    </li>
  );
};
