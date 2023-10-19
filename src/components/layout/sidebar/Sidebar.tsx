"use client";

import { FC } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import styles from "./sidebar.module.scss";
import { listMenu } from "@/components/layout/sidebar/listMenu";
import { IconArrowCouple } from "@/components/reused/Icon/Icon";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/auth/selectors";
import { selectCRS } from "@/redux/crs-selector";
import LoaderText from "@/components/reused/loader/loader-text/LoaderText";

const Sidebar: FC = () => {
  const pathname = usePathname();
  const user = useSelector(selectUser);
  const isClient = useSelector(selectCRS);

  return (
    <aside className={styles.aside}>
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
                <p className={styles.aside_linkText}>{item.title}</p>
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
          onClick={() =>
            signOut({
              callbackUrl: "/sign-in",
            })
          }
        />
        <div className={styles.aside_wrapperUserName}>
          <p className={styles.aside_userName}>
            {isClient ? `${user.firstName} ${user.lastName}` : <LoaderText />}
          </p>
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
