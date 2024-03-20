"use client";

import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./sidebar.module.scss";

import { listMenu, listMenuAdmin } from "@/components/layout/sidebar/listMenu";
import { IconArrowCouple } from "@/components/reused/Icon/Icon";

import { TItemMenu } from "@/components/layout/sidebar/listMenu";
import { RoleEnum } from "@/enums/user/role-enum";
import { useSelector } from "react-redux";
import { selectProfile, selectUser } from "@/redux/user/selectors";

const Sidebar: FC = () => {
  const pathname = usePathname();
  const user = useSelector(selectUser);
  const currentProfile = useSelector(selectProfile);

  const menu = (): TItemMenu[] | [] => {
    if (
      currentProfile?.role === RoleEnum.TEACHER ||
      currentProfile?.role === RoleEnum.STUDENT
    )
      return listMenu;
    if (currentProfile?.role === RoleEnum.OWNER_UNIVERSITY)
      return listMenuAdmin;

    // return [];
    return listMenu;
  };

  return (
    <aside
      className={`${styles.aside} ${
        pathname === "/dashboard" ? styles.active : ""
      }`}
    >
      <div
        className={`${styles.aside_inner} ${
          pathname === "/dashboard" ? styles.active : ""
        }`}
      >
        <div className={styles.aside_wrapperLogo}>
          <p className={styles.aside_logo}>
            Intellecta<span>.</span>
          </p>

          <Image
            className={styles.aside_logoV2}
            src={`${process.env.NEXT_URL}/img/logo.webp`}
            alt={"Logo"}
            width={959}
            height={959}
          />
        </div>
        <div className={styles.aside_listMenuWrapper}>
          <ul className={styles.aside_listMenu}>
            {menu().map((item) => (
              <li
                key={item.id}
                className={`${styles.aside_itemMenu} ${
                  item.href === pathname ? styles.active : ""
                }`}
              >
                <Link href={item.href} className={styles.aside_linkMenu}>
                  <Image
                    src={`${process.env.NEXT_URL}/img/sidebar/${item.url}`}
                    alt={item.title}
                    width={"30"}
                    height={"30"}
                    className={styles.aside_imgMenu}
                  />
                  <p className={styles.aside_linkText}>{item.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.aside_wrapperUser}>
          <Image
            src={
              user?.image
                ? user.image
                : `${process.env.NEXT_URL}/img/sidebar/avatar.png`
            }
            alt={"avatar"}
            width={"40"}
            height={"40"}
            className={styles.aside_imgAvatar}
          />
          <div className={styles.aside_wrapperUserName}>
            <Link href={"/dashboard/profile"}>
              <p className={styles.aside_userName}>
                {`${user?.firstName} ${user?.lastName}`}
              </p>
              <span className={styles.aside_userRole}>
                {currentProfile?.role === RoleEnum.TEACHER && "Викладач"}
                {(currentProfile?.role === RoleEnum.STUDENT ||
                  currentProfile?.role === null) &&
                  "Студент"}
                {currentProfile?.role === RoleEnum.OWNER_UNIVERSITY && "Адмін"}
              </span>
            </Link>
          </div>
          <div className={styles.aside_wrapperChangeIcon}>
            <IconArrowCouple />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
