import { Dispatch, FC, SetStateAction } from "react";
import { motion } from "framer-motion";

import styles from "./info-subject.module.scss";
import { IconSmallRightArrow } from "@/components/reused/Icon/Icon";
import { TSubject } from "@/components/ui/home/list-subjects/subjectList";
import Link from "next/link";
import React from "react";

type Props = {
  subject: TSubject | undefined;
  setActiveId: Dispatch<SetStateAction<number>>;
};

const InfoSubject: FC<Props> = ({ subject, setActiveId }) => {
  return (
    <motion.div
      initial={{ translateX: "-120%" }}
      animate={{ translateX: 0 }}
      exit={{ translateX: "-120%" }}
      transition={{ duration: 0.5 }}
      className={styles.infoSubject}
    >
      {subject && (
        <>
          <button
            className={styles.infoSubject_backBtn}
            type={"button"}
            onClick={() => setActiveId(0)}
          >
            <IconSmallRightArrow /> {subject.title}
          </button>
          <div className={styles.infoSubject_wrapper}>
            <p className={styles.infoSubject_teacher}>{subject.teacher}</p>
            <p className={styles.infoSubject_title}>
              Початок уроку:{" "}
              <span className={styles.infoSubject_text}>
                {subject.startTime}
              </span>
            </p>
            <p className={styles.infoSubject_title}>
              Кінець уроку:{" "}
              <span className={styles.infoSubject_text}>{subject.endTime}</span>{" "}
            </p>
            <Link className={styles.infoSubject_link} href={subject.linkLesson}>
              Перейти до уроку "{subject.title}"
            </Link>

            <p className={styles.infoSubject_title}>Домашнє завдання:</p>
            <p className={styles.infoSubject_text}>
              {subject.homework.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line} <br />
                </React.Fragment>
              ))}
            </p>
            <br />
            <Link className={styles.infoSubject_link} href={"/dashboard/chats"}>
              Чат по предмету "{subject.title}"
            </Link>
          </div>
        </>
      )}
    </motion.div>
  );
};
export default InfoSubject;
