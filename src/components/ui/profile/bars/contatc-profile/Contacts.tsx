"use client";

import Link from "next/link";
import { useSelector } from "react-redux";

import {
  IconCalendarList,
  IconLocation,
  IconMail,
  IconSettingsProfile,
  IconTel,
  IconWeb,
} from "@/components/reused/Icon/Icon";
import styles from "./contactList.module.scss";

import { selectUser } from "@/redux/user/selectors";

export const Contacts = () => {
  const user = useSelector(selectUser);

  return (
    <div className={styles.listWrapper}>
      <ul className={styles.listWrapper_list}>
        <li className={styles.listWrapper_item}>
          <IconMail />
          <Link href={`mailto:${user.email}`}>{user.email}</Link>
        </li>
        <li className={styles.listWrapper_item}>
          <IconTel />
          <Link href={`tel:+380979071001`}>+380 97 907 1001</Link>
        </li>
        <li className={styles.listWrapper_item}>
          <IconWeb />
          intellecta.com.ua
        </li>
        <li className={styles.listWrapper_item}>
          <IconLocation />
          Одеса, Україна
        </li>
        <li className={styles.listWrapper_item}>
          <IconCalendarList />
          13 вер, 2000
        </li>
        <li className={styles.listWrapper_item}>
          <button className={styles.settings}>
            <IconSettingsProfile />
          </button>
        </li>
      </ul>
    </div>
  );
};
