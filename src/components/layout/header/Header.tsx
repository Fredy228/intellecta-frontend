"use client";

import { FC } from "react";
import { ToastContainer } from "react-toastify";

import styles from "./header.module.scss";
import { IconNotific, IconSetting } from "@/components/reused/Icon/Icon";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";
import { UserInterface } from "@/interfaces/user";

const Header: FC = () => {
  const { data } = useSession();
  const currentUser = data?.user as UserInterface;

  return (
    <header className={styles.header}>
      <div className={styles.header_inner}>
        <div className={styles.header_userName}>
          <p>Привіт {data && currentUser.firstName},</p>
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
