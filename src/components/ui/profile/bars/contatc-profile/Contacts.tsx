import { Fragment } from "react";
import Link from "next/link";
import { contacts } from "@/components/ui/profile/bars/contatc-profile/list";
import {
  IconCalendarList,
  IconLocation,
  IconMail,
  IconSettingsProfile,
  IconTel,
  IconWeb,
} from "@/components/reused/Icon/Icon";
import styles from "./contactList.module.scss";

export const Contacts = () => {
  return (
    <div className={styles.listWrapper}>
      <ul>
        {contacts.map((contact) => (
          <Fragment key={contact.id}>
            <li>
              <IconMail />
              <Link href={`mail:${contact.email}`}>{contact.email}</Link>
            </li>
            <li>
              <IconTel />
              <Link href={`tel:${contact.tel}`}>{contact.tel}</Link>
            </li>
            <li>
              <IconWeb />
              {contact.web}
            </li>
            <li>
              <IconLocation />
              {contact.location}
            </li>
            <li>
              <IconCalendarList />
              {contact.dataReg}
            </li>
          </Fragment>
        ))}
        <li>
          <button className={styles.settings}>
            <IconSettingsProfile />
          </button>
        </li>
      </ul>
    </div>
  );
};
