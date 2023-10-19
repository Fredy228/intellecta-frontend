"use client";

import { FC, PropsWithChildren, Suspense, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import Header from "@/components/layout/header/Header";
import Sidebar from "@/components/layout/sidebar/Sidebar";

import styles from "./layout.module.scss";
import { useDispatch } from "react-redux";
import { setCRS } from "@/redux/crs-slice";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const session = useSession();
  const dispatch = useDispatch();

  console.log(session);

  useEffect(() => {
    dispatch(setCRS(true));
  }, []);

  return (
    <div className={styles.layout_wrapper}>
      <Sidebar />
      <div className={styles.layout_wrapperMain}>
        <Header />
        <div className={styles.layout_wrapperChild}>
          <Suspense fallback={""}>{children}</Suspense>
        </div>
      </div>
    </div>
  );
};

export default Layout;
