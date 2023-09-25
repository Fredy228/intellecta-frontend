import { FC, PropsWithChildren } from "react";

import Header from "@/components/layout/header/Header";
import Sidebar from "@/components/layout/sidebar/Sidebar";

import styles from "./layout.module.scss";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
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
