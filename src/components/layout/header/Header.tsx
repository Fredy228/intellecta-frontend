"use client";

import { type FC, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import styles from "./header.module.scss";

import {
  IconCross,
  IconNotific,
  IconSetting,
} from "@/components/reused/Icon/Icon";

import Notice from "@/components/layout/header/notice/Notice";
import { selectUser } from "@/redux/user/selectors";
import PopapMenuWrap from "@/components/reused/popap-menu-wrap/PopapMenuWrap";

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
          <li key={10} className={styles.header_itemNotificCenter}>
            <IconSetting />
          </li>

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
          <AnimatePresence>
            {isShowNotice && (
              <PopapMenuWrap
                setShow={setIsShowNotice}
                keyItem={7453}
                stylePop={{ top: "calc(100% + 10px)", right: "0" }}
              >
                <Notice />
              </PopapMenuWrap>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </header>
  );
};

export default Header;
