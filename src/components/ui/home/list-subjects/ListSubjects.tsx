"use client";

import { FC, useState } from "react";
import styles from "./list-subjects.module.scss";
import { subjectList } from "@/components/ui/home/list-subjects/subjectList";
import Image from "next/image";
import { IconSmallRightArrow } from "@/components/reused/Icon/Icon";
import InfoSubject from "@/components/ui/home/list-subjects/info-subject/InfoSubject";
import { AnimatePresence, motion } from "framer-motion";

const ListSubjects: FC = () => {
  const [activeId, setActiveId] = useState<number>(0);

  const activeSubject = subjectList.find((i) => i.id === activeId);
  const toSubject = (id: number): void => {
    setActiveId(id);
  };

  return (
    <div className={styles.listSubjects}>
      <div>
        <p className={styles.listSubjects_title}>Заняття сьогодні:</p>
      </div>
      <AnimatePresence>
        {activeSubject && (
          <InfoSubject setActiveId={setActiveId} subject={activeSubject} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!activeId && (
          <motion.ul
            initial={{ translateY: "150%" }}
            animate={{ translateY: 0 }}
            exit={{ translateY: "150%" }}
            transition={{ duration: 0.5 }}
            className={styles.listSubjects_list}
          >
            {subjectList.map((item) => (
              <motion.li
                initial={{ marginBottom: "75px" }}
                animate={{ marginBottom: "10px" }}
                exit={{ marginBottom: "75px" }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className={styles.listSubjects_item}
                onClick={() => toSubject(item.id)}
              >
                <div className={styles.listSubjects_itemWrapp}>
                  <div className={styles.listSubjects_itemWrapperImg}>
                    <Image
                      src={`${process.env.NEXT_URL}/img/subjects/${item.url}`}
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
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ListSubjects;
