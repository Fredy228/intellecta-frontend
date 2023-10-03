"use client";

import { FC } from "react";
import Image from "next/image";

import styles from "./sidebar.module.scss";
import { listMenu } from "@/components/layout/sidebar/listMenu";
import { IconArrowCouple } from "@/components/reused/Icon/Icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar: FC = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.aside}>
      <div className={styles.aside_wrapperLogo}>
        <p className={styles.aside_logo}>
          Intellecta<span>.</span>
        </p>
      </div>
      <div className={styles.aside_listMenuWrapper}>
        <ul className={styles.aside_listMenu}>
          {listMenu.map((item) => (
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
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.aside_wrapperUser}>
        <Image
          src={`${process.env.NEXT_URL}/img/sidebar/avatar.png`}
          alt={"avatar"}
          width={"40"}
          height={"40"}
          className={styles.aside_imgAvatar}
        />
        <div className={styles.aside_wrapperUserName}>
          <p className={styles.aside_userName}>Кармазін Олексій</p>
          <span className={styles.aside_userRole}>Студент 2-го курсу</span>
        </div>
        <div className={styles.aside_wrapperChangeIcon}>
          <IconArrowCouple />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
