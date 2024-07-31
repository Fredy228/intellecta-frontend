"use client";

import { type FC, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import styles from "./header.module.scss";

import {
  IconCross,
  IconNotific,
  IconSetting,
} from "@/components/reused/Icon/Icon";

import Notice from "@/components/layout/header/notice/Notice";
import { selectProfiles, selectUser } from "@/redux/user/selectors";
import PopapMenuWrap from "@/components/reused/popap-menu-wrap/PopapMenuWrap";
import ModalWindow from "@/components/reused/modal-window/ModalWindow";
import ChooseProfile from "@/components/layout/sidebar/choose-prolie/choose-profile";

const Header: FC = () => {
  const user = useSelector(selectUser);
  const currProfiles = useSelector(selectProfiles);

  const [isShowChooseProfile, setIsShowChooseProfile] =
    useState<boolean>(false);
  const [isShowNotice, setIsShowNotice] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.header_userName}>
          <p>Привіт {user?.firstName}</p>
        </div>
        <ul className={styles.header_listNotificCenter}>
          {currProfiles.length > 1 && (
            <li
              key={11}
              className={styles.header_itemNotificCenter}
              onClick={() => setIsShowChooseProfile((prev) => !prev)}
            >
              <CachedOutlinedIcon />
            </li>
          )}

          <li key={10} className={styles.header_itemNotificCenter}>
            <SettingsOutlinedIcon />
          </li>

          <li
            key={20}
            style={isShowNotice ? { zIndex: 120 } : {}}
            className={`${styles.header_itemNotificCenter} ${styles.notice} ${
              isShowNotice ? styles.active : ""
            }`}
            onClick={() => setIsShowNotice((prevState) => !prevState)}
          >
            {isShowNotice ? <IconCross /> : <NotificationsOutlinedIcon />}

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
          <AnimatePresence>
            {isShowChooseProfile && (
              <ModalWindow setShow={setIsShowChooseProfile}>
                <ChooseProfile setShow={setIsShowChooseProfile} />
              </ModalWindow>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </header>
  );
};

export default Header;
