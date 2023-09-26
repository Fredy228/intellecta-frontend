import { Dispatch, FC, SetStateAction } from "react";

import styles from "./info-subject.module.scss";
import { IconSmallRightArrow } from "@/components/reused/Icon/Icon";
import { TSubject } from "@/components/ui/home/list-subjects/subjectList";
import Link from "next/link";

type Props = {
  subject: TSubject | undefined;
  setActiveId: Dispatch<SetStateAction<number>>;
};

const InfoSubject: FC<Props> = ({ subject, setActiveId }) => {
  return (
    <div className={`${styles.infoSubject} ${subject ? styles.active : ""}`}>
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
            <Link
              className={styles.infoSubject_link}
              href={"/dashboard/conversation"}
            >
              Перейти до уроку "{subject.title}"
            </Link>

            <p className={styles.infoSubject_title}>Домашнє завдання:</p>
            <p className={styles.infoSubject_text}>
              {subject.homework.split("\n").map((line, index) => (
                <>
                  {line} <br />
                </>
              ))}
            </p>
            <br />
            <Link
              className={styles.infoSubject_link}
              href={"/dashboard/conversation"}
            >
              Чат по предмету "{subject.title}"
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
export default InfoSubject;
