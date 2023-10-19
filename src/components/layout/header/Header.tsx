"use client";

import { FC } from "react";
import { ToastContainer } from "react-toastify";

import styles from "./header.module.scss";
import { IconNotific, IconSetting } from "@/components/reused/Icon/Icon";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/auth/selectors";
import { selectCRS } from "@/redux/crs-selector";
import LoaderText from "@/components/reused/loader/loader-text/LoaderText";

const Header: FC = () => {
  const user = useSelector(selectUser);
  const isClient = useSelector(selectCRS);

  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.header_userName}>
          <p>Привіт {isClient ? user.firstName : <LoaderText />},</p>
        </div>
        <ul className={styles.header_listNotificCenter}>
          <li className={styles.header_itemNotificCenter}>
            <IconSetting />
          </li>
          <li className={styles.header_itemNotificCenter}>
            <IconNotific />
            <div className={styles.header_wrapperCountNotificCenter}>
              <span className={styles.header_countNotificCenter}>2</span>
            </div>
          </li>
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
