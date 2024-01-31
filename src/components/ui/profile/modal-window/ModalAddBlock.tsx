import styles from "./modal-add-block.module.scss";

import { blockInfo, TBlockInfo } from "./lists";
import { ModalAddBlockItem } from "@/components/ui/profile/modal-window/modal-window-Item/ModalAddBlockItem";

export const ModalAddBlock = () => {
  return (
    <div className={styles.modalAddBlock}>
      <ul className={styles.modalAddBlock_list}>
        {blockInfo.map((item: TBlockInfo) => (
          <ModalAddBlockItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
