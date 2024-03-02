"use client";

import Link from "next/link";

import {
  IconCalendarList,
  IconLocation,
  IconMail,
  IconRector,
  IconWeb,
} from "@/components/reused/Icon/Icon";
import styles from "./contactList.module.scss";

import { TUniversityContacts } from "@/types/profile";

export const ProfileContactsUniversity = ({
  contacts,
}: {
  contacts: TUniversityContacts;
}) => {
  return (
    <div className={styles.listWrapper}>
      <ul className={styles.listWrapper_list}>
        {contacts.rector && (
          <li className={styles.listWrapper_item}>
            <IconRector />
            {contacts.rector}
          </li>
        )}
        {contacts.mail && (
          <li className={styles.listWrapper_item}>
            <IconMail />
            <Link href={`mailto:${contacts.mail}`}>{contacts.mail}</Link>
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
        {contacts.foundationYear && (
          <li className={styles.listWrapper_item}>
            <IconCalendarList />
            {contacts.foundationYear}
          </li>
        )}
      </ul>
    </div>
  );
};
