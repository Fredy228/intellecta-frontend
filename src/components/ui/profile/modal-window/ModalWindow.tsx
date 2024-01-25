import styles from "@/components/ui/profile/bars/addBlock/addBlock.module.scss";
import {blockInfo} from "@/components/ui/profile/modal-window/modal-window-Item/lists";
import {ModalWindowItem} from "@/components/ui/profile/modal-window/modal-window-Item/ModalWindowItem";
import {
  coursesIcons,
  listOptionsImg
} from "@/components/ui/profile/modal-window/modal-window-Item/icon-check/IconModal";
import {IconsImport} from "@/components/reused/Icon/IconsImport";

export const ModalWindow = () => {
  return (
      <div className={styles.modal_wrapper}>
        <ul>
          {blockInfo.map(item => (
              <>
                {listOptionsImg.map(( item ) => (
                      <IconsImport {...item}/>

                ))}
                <ModalWindowItem key={item.id} {...item}/>
              </>
          ))}
        </ul>
      </div>
  );
};
