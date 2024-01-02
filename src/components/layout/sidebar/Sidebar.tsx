"use client";

import { type FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import styles from "./sidebar.module.scss";

import { listMenu, listMenuAdmin } from "@/components/layout/sidebar/listMenu";
import { IconArrowCouple } from "@/components/reused/Icon/Icon";
import SidebarSkeleton from "@/components/layout/sidebar/sidebar-skeleton/SidebarSkeleton";

import { TItemMenu } from "@/components/layout/sidebar/listMenu";
import { RoleEnum } from "@/enums/user/role-enum";
import { UserInterface } from "@/interfaces/user";

const Sidebar: FC = () => {
  const pathname = usePathname();
  const { data } = useSession();
  const currentUser = data?.user as UserInterface;

  const menu = (): TItemMenu[] | [] => {
    if (
      currentUser?.role === RoleEnum.TEACHER ||
      currentUser?.role === RoleEnum.STUDENT
    )
      return listMenu;
    if (currentUser?.role === RoleEnum.ADMIN) return listMenuAdmin;
    return [];
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
            {menu().length !== 0 && data ? (
              menu().map((item) => (
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
              ))
            ) : (
              <SidebarSkeleton pathname={pathname} />
            )}
          </ul>
        </div>
        <div className={styles.aside_wrapperUser}>
          <Image
            src={`${process.env.NEXT_URL}/img/sidebar/avatar.png`}
            alt={"avatar"}
            width={"40"}
            height={"40"}
            className={styles.aside_imgAvatar}
            onClick={() =>
              signOut({
                callbackUrl: "/sign-in",
              })
            }
          />
          <div className={styles.aside_wrapperUserName}>
            <p className={styles.aside_userName}>
              {data && `${currentUser.firstName} ${currentUser.lastName}`}
            </p>
            <span className={styles.aside_userRole}>
              {currentUser?.role === RoleEnum.TEACHER && "Викладач"}
              {currentUser?.role === RoleEnum.STUDENT && "Студент"}
              {currentUser?.role === RoleEnum.ADMIN && "Адмін"}
            </span>
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
