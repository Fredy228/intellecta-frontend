"use client";

import { type FC, type PropsWithChildren } from "react";

import styles from "./layout.module.scss";

import Header from "@/components/layout/header/Header";
import Sidebar from "@/components/layout/sidebar/Sidebar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout_wrapper}>
      <Sidebar />
      <div className={styles.layout_wrapperMain}>
        <Header />
        <div className={styles.layout_wrapperChild}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
