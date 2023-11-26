import type { FC } from "react";

import styles from "./homework-table.module.scss";
import Image from "next/image";

type Props = {};
const HomeWorkTable: FC<Props> = () => {
  return (
    <table className={styles.table}>
      <thead className={styles.table_head}>
        <tr>
          <td className={`${styles.table_headColum} ${styles.table_headData}`}>
            Дата
          </td>
          <td
            className={`${styles.table_headColum} ${styles.table_headSubject}`}
          >
            Предмет
          </td>
          <td className={styles.table_headColum}>Домашнє завдання</td>
        </tr>
      </thead>
      <tbody className={styles.table_body}>
        <tr>
          <td
            className={`${styles.table_bodyData} ${styles.table_tdBody}`}
            rowSpan={5}
          >
            25 травня
          </td>
          <td className={`${styles.table_bodySubject} ${styles.table_tdBody}`}>
            <div className={styles.subject_wrapperIcon}>
              <Image
                src={`${process.env.NEXT_URL}/img/subjects/math.png`}
                alt={"Іконка предмету"}
                width={"32"}
                height={"32"}
                className={styles.subject_icon}
              />
            </div>
            <div className={styles.subject_wrapperInfo}>
              <p className={styles.subject_name}>Алгебра</p>
              <span className={styles.subject_teacher}>Васильева Алла</span>
            </div>
          </td>
          <td className={`${styles.table_bodyHomework} ${styles.table_tdBody}`}>
            с. 12 зав. 45, 56, 58, 59, 60; с. 12-34
          </td>
        </tr>
        <tr>
          <td className={`${styles.table_bodySubject} ${styles.table_tdBody}`}>
            <div className={styles.subject_wrapperIcon}>
              <Image
                src={`${process.env.NEXT_URL}/img/subjects/geography.png`}
                alt={"Іконка предмету"}
                width={"32"}
                height={"32"}
                className={styles.subject_icon}
              />
            </div>
            <div className={styles.subject_wrapperInfo}>
              <p className={styles.subject_name}>Географія</p>
              <span className={styles.subject_teacher}>Васильева Алла</span>
            </div>
          </td>
          <td className={`${styles.table_bodyHomework} ${styles.table_tdBody}`}>
            с. 87 зав. 45, 56
          </td>
        </tr>
        <tr>
          <td className={`${styles.table_bodySubject} ${styles.table_tdBody}`}>
            <div className={styles.subject_wrapperIcon}>
              <Image
                src={`${process.env.NEXT_URL}/img/subjects/math.png`}
                alt={"Іконка предмету"}
                width={"32"}
                height={"32"}
                className={styles.subject_icon}
              />
            </div>
            <div className={styles.subject_wrapperInfo}>
              <p className={styles.subject_name}>Алгебра</p>
              <span className={styles.subject_teacher}>Васильева Алла</span>
            </div>
          </td>
          <td className={`${styles.table_bodyHomework} ${styles.table_tdBody}`}>
            с. 94 зав. 45, 56, 58, 59
          </td>
        </tr>
        <tr>
          <td className={`${styles.table_bodySubject} ${styles.table_tdBody}`}>
            <div className={styles.subject_wrapperIcon}>
              <Image
                src={`${process.env.NEXT_URL}/img/subjects/sport.png`}
                alt={"Іконка предмету"}
                width={"32"}
                height={"32"}
                className={styles.subject_icon}
              />
            </div>
            <div className={styles.subject_wrapperInfo}>
              <p className={styles.subject_name}>Фізкультура</p>
              <span className={styles.subject_teacher}>Васильева Алла</span>
            </div>
          </td>
          <td className={`${styles.table_bodyHomework} ${styles.table_tdBody}`}>
            с. 40-44 зав. 45; с. 130 зав. 1
          </td>
        </tr>
        <tr>
          <td className={`${styles.table_bodySubject} ${styles.table_tdBody}`}>
            <div className={styles.subject_wrapperIcon}>
              <Image
                src={`${process.env.NEXT_URL}/img/subjects/history.png`}
                alt={"Іконка предмету"}
                width={"32"}
                height={"32"}
                className={styles.subject_icon}
              />
            </div>
            <div className={styles.subject_wrapperInfo}>
              <p className={styles.subject_name}>Історія</p>
              <span className={styles.subject_teacher}>Васильева Алла</span>
            </div>
          </td>
          <td className={`${styles.table_bodyHomework} ${styles.table_tdBody}`}>
            с. 55 зав. 45, 56, 58, 59, 60; с. 12-34
          </td>
        </tr>
        <tr>
          <td
            className={`${styles.table_bodyData} ${styles.table_tdBody}`}
            rowSpan={3}
          >
            26 травня
          </td>
          <td className={`${styles.table_bodySubject} ${styles.table_tdBody}`}>
            <div className={styles.subject_wrapperIcon}>
              <Image
                src={`${process.env.NEXT_URL}/img/subjects/law.png`}
                alt={"Іконка предмету"}
                width={"32"}
                height={"32"}
                className={styles.subject_icon}
              />
            </div>
            <div className={styles.subject_wrapperInfo}>
              <p className={styles.subject_name}>Правознавство</p>
              <span className={styles.subject_teacher}>Васильева Алла</span>
            </div>
          </td>
          <td className={`${styles.table_bodyHomework} ${styles.table_tdBody}`}>
            с. 12 зав. 45, 56, 58, 59, 60; с. 12-34
          </td>
        </tr>
        <tr>
          <td className={`${styles.table_bodySubject} ${styles.table_tdBody}`}>
            <div className={styles.subject_wrapperIcon}>
              <Image
                src={`${process.env.NEXT_URL}/img/subjects/history.png`}
                alt={"Іконка предмету"}
                width={"32"}
                height={"32"}
                className={styles.subject_icon}
              />
            </div>
            <div className={styles.subject_wrapperInfo}>
              <p className={styles.subject_name}>Історія</p>
              <span className={styles.subject_teacher}>Васильева Алла</span>
            </div>
          </td>
          <td className={`${styles.table_bodyHomework} ${styles.table_tdBody}`}>
            с. 55 зав. 45, 56, 58, 59, 60; с. 12-34
          </td>
        </tr>
        <tr>
          <td className={`${styles.table_bodySubject} ${styles.table_tdBody}`}>
            <div className={styles.subject_wrapperIcon}>
              <Image
                src={`${process.env.NEXT_URL}/img/subjects/geography.png`}
                alt={"Іконка предмету"}
                width={"32"}
                height={"32"}
                className={styles.subject_icon}
              />
            </div>
            <div className={styles.subject_wrapperInfo}>
              <p className={styles.subject_name}>Географія</p>
              <span className={styles.subject_teacher}>Васильева Алла</span>
            </div>
          </td>
          <td className={`${styles.table_bodyHomework} ${styles.table_tdBody}`}>
            с. 55 зав. 45, 56, 58, 59, 60; с. 12-34
          </td>
        </tr>
      </tbody>
    </table>
  );
};
export default HomeWorkTable;
