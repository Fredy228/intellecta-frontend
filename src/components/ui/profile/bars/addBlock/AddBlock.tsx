"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import styles from "./addBlock.module.scss";

import { ModalAddBlock } from "@/components/ui/profile/modal-window/ModalAddBlock";
import ModalWindow from "@/components/reused/modal-window/ModalWindow";

export const AddBlock = () => {
  const [isShowAddWidget, setIsShowAddWidget] = useState<boolean>(false);

  return (
    <div
      className={styles.add_wrapper}
      onClick={() => setIsShowAddWidget(!isShowAddWidget)}
    >
      <button className={styles.btnAdd} type={"button"}></button>
      <div>
        <AnimatePresence>
          {isShowAddWidget && (
            <ModalWindow setShow={setIsShowAddWidget}>
              <ModalAddBlock />
            </ModalWindow>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
