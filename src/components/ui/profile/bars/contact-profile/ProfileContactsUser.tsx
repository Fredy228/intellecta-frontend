"use client";

import Link from "next/link";

import {
  IconCalendarList,
  IconLocation,
  IconMail,
  IconSettingsProfile,
  IconTel,
  IconWeb,
} from "@/components/reused/Icon/Icon";
import styles from "./contactList.module.scss";

import { TStudentContacts } from "@/types/profile";

export const ProfileContactsUser = ({
  contacts,
}: {
  contacts: TStudentContacts;
}) => {
  return (
    <div className={styles.listWrapper}>
      <ul className={styles.listWrapper_list}>
        {contacts.mail && (
          <li className={styles.listWrapper_item}>
            <IconMail />
            <Link href={`mailto:${contacts.mail}`}>{contacts.mail}</Link>
          </li>
        )}
        {contacts.tel && (
          <li className={styles.listWrapper_item}>
            <IconTel />
            <Link href={`tel:${contacts.tel}`}>{contacts.tel}</Link>
          </li>
        )}
        {contacts.link && (
          <li className={styles.listWrapper_item}>
            <IconWeb />
            <Link href={"https://" + contacts.link}>{contacts.link}</Link>
          </li>
        )}
        {contacts.location && (
          <li className={styles.listWrapper_item}>
            <IconLocation />
            {contacts.location}
          </li>
        )}
        {contacts.birthday && (
          <li className={styles.listWrapper_item}>
            <IconCalendarList />
            {contacts.birthday}
          </li>
        )}
        <li className={styles.listWrapper_item}>
          <button className={styles.settings}>
            <IconSettingsProfile />
          </button>
        </li>
      </ul>
    </div>
  );
};
