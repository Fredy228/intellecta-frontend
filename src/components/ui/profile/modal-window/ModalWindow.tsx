import {blockInfo, TBlockInfo} from "@/components/ui/profile/modal-window/modal-window-Item/lists";
import {ModalWindowItem} from "@/components/ui/profile/modal-window/modal-window-Item/ModalWindowItem";
import styles from "@/components/ui/profile/bars/addBlock/addBlock.module.scss";

export const ModalWindow = () => {
  return (
      <div className={styles.modal_wrapper}>
          <ul className={styles.menu_list} >
          {blockInfo.map((item: TBlockInfo) => (
                <ModalWindowItem  key={item.id} {...item}/>
          ))}
          </ul>
      </div>
  );
};
