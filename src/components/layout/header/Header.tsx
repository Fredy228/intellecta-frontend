"use client";

import { type FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

import styles from "./header.module.scss";

import {
  IconCross,
  IconNotific,
  IconSetting,
} from "@/components/reused/Icon/Icon";

import Notice from "@/components/layout/header/notice/Notice";
import Backdrop from "@/components/reused/backdrop/Backdrop";
import { selectUser } from "@/redux/user/selectors";

const Header: FC = () => {
  const user = useSelector(selectUser);

  const [isShowNotice, setIsShowNotice] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.header_userName}>
          <p>Привіт {user.firstName}</p>
        </div>
        <ul className={styles.header_listNotificCenter}>
          <AnimatePresence>
            {!isShowNotice && (
              <motion.li
                key={10}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={styles.header_itemNotificCenter}
              >
                <IconSetting />
              </motion.li>
            )}
            <li
              key={20}
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
            {isShowNotice && (
              <>
                <Notice isShow={isShowNotice} />
                <Backdrop
                  setShow={setIsShowNotice}
                  backgroundColor={"transparent"}
                ></Backdrop>
              </>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </header>
  );
};

export default Header;
