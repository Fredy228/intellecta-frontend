import {FC} from "react";
import {blockInfo, TBlockInfo} from "@/components/ui/profile/modal-window/modal-window-Item/lists";
import styles from "@/components/ui/profile/bars/addBlock/addBlock.module.scss";

export const ModalWindowItem:FC<TBlockInfo> = ({named}) => {
  return (
      <li className={styles.menu_list_item}>
        <div className={styles.img_imitation}></div>
        <button className={styles.menu_list_button}>{named}</button>
      </li>);
};
