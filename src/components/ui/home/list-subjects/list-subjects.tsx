"use client";

import { FC, useState } from "react";
import styles from "./list-subjects.module.scss";
import { subjectList } from "@/components/ui/home/list-subjects/subjectList";
import Image from "next/image";
import { IconSmallRightArrow } from "@/components/reused/Icon/Icon";
import InfoSubject from "@/components/ui/home/list-subjects/info-subject/InfoSubject";

const ListSubjects: FC = () => {
  const [activeId, setActiveId] = useState<number>(0);

  return (
    <div className={styles.listSubjects}>
      <p className={styles.listSubjects_title}>Заняття сьогодні:</p>

      <InfoSubject
        setActiveId={setActiveId}
        subject={subjectList.find((i) => i.id === activeId)}
      />

      <ul
        className={`${styles.listSubjects_list} ${
          activeId ? styles.active : ""
        }`}
      >
        {subjectList.map((item) => (
          <li
            key={item.id}
            className={styles.listSubjects_item}
            onClick={() => setActiveId(item.id)}
          >
            <div className={styles.listSubjects_itemWrapperImg}>
              <Image
                src={`http://localhost:3000/img/subjects/${item.url}`}
                alt={item.title}
                width={"32"}
                height={"32"}
                className={styles.listSubjects_itemImg}
              />
            </div>
            <div className={styles.listSubjects_itemNameWrapper}>
              <p className={styles.listSubjects_itemName}>{item.title}</p>
              <span className={styles.listSubjects_itemTeacher}>
                {item.teacher}
              </span>
            </div>
            <div className={styles.listSubjects_itemArrowWrapper}>
              <IconSmallRightArrow />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListSubjects;
