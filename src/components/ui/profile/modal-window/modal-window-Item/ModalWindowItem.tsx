import {FC} from "react";
import {blockInfo, TBlockInfo} from "@/components/ui/profile/modal-window/modal-window-Item/lists";
import styles from "@/components/ui/profile/bars/addBlock/addBlock.module.scss";

export const ModalWindowItem:FC<TBlockInfo> = ({id, named}) => {
  return <><li >{named}</li></>;
};
