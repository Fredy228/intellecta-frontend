"use client"

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import styles from "./addBlock.module.scss";

import { ModalAddBlock } from "@/components/ui/profile/modal-window/ModalAddBlock";
import ModalWindow from "@/components/reused/modal-window/ModalWindow";
import {ModalWindowAbout} from "@/components/ui/profile/modal-window/modal-window-about/ModalWindowAbout";
import AddWidget from "@/components/ui/home/intro/home-widget/add-widget/AddWidget";


export const AddBlock = () => {
  const [isShowAddWidget, setIsShowAddWidget] = useState<boolean>(false);
  const [isShowIdx, setIsShowIdx] = useState<number | null>(1);
  // const deleteWidget = (id: string) => {
  //   setWidgets((prevState) => prevState.filter((i) => i.id !== id));
  // };
  return (
    <div
      className={styles.add_wrapper}
      onClick={() => setIsShowAddWidget(!isShowAddWidget)}
    >
      <button className={styles.btnAdd} type={"button"}></button>
      <div>
        <AnimatePresence>
          {isShowAddWidget && (
            <ModalWindow setShow={setIsShowAddWidget} setShowIdx={setIsShowIdx}>
              <ModalAddBlock/>
            </ModalWindow>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
