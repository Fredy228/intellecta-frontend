"use client";

import type { FC } from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./header.module.scss";
import {
  IconCross,
  IconNotific,
  IconSetting,
} from "@/components/reused/Icon/Icon";
import "react-toastify/dist/ReactToastify.css";
import { UserInterface } from "@/interfaces/user";
import Notice from "@/components/layout/header/notice/Notice";
import Backdrop from "@/components/reused/backdrop/Backdrop";

const Header: FC = () => {
  const { data } = useSession();
  const currentUser = data?.user as UserInterface;

  const [isShowNotice, setIsShowNotice] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.header_userName}>
          <p>Привіт {data && currentUser.firstName},</p>
        </div>
        <ul className={styles.header_listNotificCenter}>
          <AnimatePresence>
            {!isShowNotice && (
              <motion.li
                key={1}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.header_itemNotificCenter}
              >
                <IconSetting />
              </motion.li>
            )}
            <li
              key={2}
              style={isShowNotice ? { zIndex: 120 } : {}}
              className={`${styles.header_itemNotificCenter} ${styles.notice} ${
                isShowNotice ? styles.active : ""
              }`}
              onClick={() => setIsShowNotice((prevState) => !prevState)}
            >
              {isShowNotice ? <IconCross /> : <IconNotific />}

              <div className={styles.header_wrapperCountNotificCenter}>
                <span className={styles.header_countNotificCenter}>2</span>
              </div>
            </li>
            {isShowNotice && <Notice isShow={isShowNotice} />}
            {isShowNotice && (
              <Backdrop
                setShow={setIsShowNotice}
                backgroundColor={"transparent"}
              ></Backdrop>
            )}
          </AnimatePresence>
        </ul>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={3}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </header>
  );
};

export default Header;
