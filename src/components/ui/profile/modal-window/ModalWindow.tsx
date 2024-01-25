import styles from "@/components/ui/profile/bars/addBlock/addBlock.module.scss";
import {blockInfo} from "@/components/ui/profile/modal-window/modal-window-Item/lists";
import {ModalWindowItem} from "@/components/ui/profile/modal-window/modal-window-Item/ModalWindowItem";
import {
  coursesIcons,
  listOptionsImg
} from "@/components/ui/profile/modal-window/modal-window-Item/icon-check/IconModal";

export const ModalWindow = () => {
  return (
      <div className={styles.modal_wrapper}>
        <ul>
          {blockInfo.map(item => (
              <>
                {listOptionsImg.map(( item ) => (
                    <div>
                      {coursesIcons[item.img]}
                    </div>
                ))}
                <ModalWindowItem key={item.id} {...item}/>
              </>
          ))}
        </ul>
      </div>
  );
};
