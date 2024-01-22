"use client";

import { type FC, type PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";

import styles from "./layout.module.scss";

import Header from "@/components/layout/header/Header";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import LoaderPage from "@/components/reused/loader/loader-page";
import { selectUser } from "@/redux/user/selectors";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const user = useSelector(selectUser);
  const { status } = useSession();

  if (status === "loading" || (status === "authenticated" && !user.accessToken))
    return <LoaderPage isFull={true} />;

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
