"use client";

import type { FC } from "react";
import { PropsWithChildren, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";

import Header from "@/components/layout/header/Header";
import Sidebar from "@/components/layout/sidebar/Sidebar";

import styles from "./layout.module.scss";
import { setCRS } from "@/redux/crs-slice";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const session = useSession();
  const dispatch = useDispatch();

  console.log("session", session);

  useEffect(() => {
    dispatch(setCRS(true));
  }, []);

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
