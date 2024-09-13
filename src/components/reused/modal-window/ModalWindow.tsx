import { createPortal } from "react-dom";
import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
} from "react";
import { motion } from "framer-motion";

import styles from "./modal-window.module.scss";

const modalRoot = document.querySelector("#modal-root");

type Props = {
  setShow?: Dispatch<SetStateAction<boolean>>;
  setShowIdx?: Dispatch<SetStateAction<number | null>>;
  backgroundColor?: string;
  backdropFilter?: string;
  zIndex?: string;
  position?: "center" | "bottom";
} & PropsWithChildren;

const ModalWindow: FC<Props> = ({
  children,
  setShow,
  setShowIdx,
  backgroundColor = "rgba(25, 25, 25, 0.30)",
  backdropFilter = "none",
  zIndex = "100",
  position = "center",
}) => {
  let styleModal = styles.modal_modal;
  let motionConfig = {};
  if (position === "center") {
    styleModal += " " + styles.center;
    motionConfig = {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    };
  }
  if (position === "bottom") {
    styleModal += " " + styles.bottom;
    motionConfig = {
      initial: { transform: "translate(-50%, 100%)" },
      animate: { transform: "translate(-50%, 0)" },
      exit: { transform: "translate(-50%, 100%)" },
    };
  }

  const handleBackdropClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      if (setShowIdx) setShowIdx(null);
      if (setShow) setShow(false);
    }
  };

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === "Escape") {
        if (setShowIdx) setShowIdx(null);
        if (setShow) setShow(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShow, setShowIdx]);

  if (!modalRoot) return;

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ backgroundColor, backdropFilter, zIndex }}
      className={styles.modal_backdrop}
      onClick={handleBackdropClick}
    >
      <motion.div {...motionConfig} className={styleModal}>
        {children}
      </motion.div>
    </motion.div>,
    modalRoot
  );
};

export default ModalWindow;
