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

import ModalWindow from "@/components/reused/modal-window/ModalWindow";
import ModalInfoUser from "@/components/ui/profile/modal-window/modal-info-user/ModalInfoUser";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/user/selectors";
import { parsePhoneNumber } from "libphonenumber-js";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export const ProfileContactsUser = () => {
  const user = useSelector(selectUser);

  const [isShowEditContact, setIsShowEditContact] = useState<boolean>(false);

  return (
    <div className={styles.listWrapper}>
      <ul className={styles.listWrapper_list}>
        {user?.email && (
          <li className={styles.listWrapper_item}>
            <IconMail />
            <Link href={`mailto:${user?.email}`}>{user?.email}</Link>
          </li>
        )}
        {user?.phone && (
          <li className={styles.listWrapper_item}>
            <IconTel />
            <Link
              href={`tel:${
                parsePhoneNumber(user?.phone.number, user?.phone.country).number
              }`}
            >
              {parsePhoneNumber(user?.phone.number, user?.phone.country).number}
            </Link>
          </li>
        )}
        {/*{contacts.link && (*/}
        {/*  <li className={styles.listWrapper_item}>*/}
        {/*    <IconWeb />*/}
        {/*    <Link href={"https://" + contacts.link}>{contacts.link}</Link>*/}
        {/*  </li>*/}
        {/*)}*/}
        {/*{contacts.location && (*/}
        {/*  <li className={styles.listWrapper_item}>*/}
        {/*    <IconLocation />*/}
        {/*    {contacts.location}*/}
        {/*  </li>*/}
        {/*)}*/}
        {user?.birthday && (
          <li className={styles.listWrapper_item}>
            <IconCalendarList />
            {new Date(user?.birthday).toLocaleDateString()}
          </li>
        )}
        <li className={styles.listWrapper_item}>
          <button
            className={styles.settings}
            onClick={() => setIsShowEditContact(true)}
          >
            <IconSettingsProfile />
          </button>
        </li>
      </ul>
      <AnimatePresence>
        {isShowEditContact && (
          <ModalWindow setShow={setIsShowEditContact}>
            <ModalInfoUser setIsShow={setIsShowEditContact} />
          </ModalWindow>
        )}
      </AnimatePresence>
    </div>
  );
};
