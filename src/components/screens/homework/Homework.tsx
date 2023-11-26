"use client";

import type { NextPage } from "next";
import styles from "./homework.module.scss";
import SelectedCustom from "@/components/reused/selected-custom/SelectedCustom";
import { useState } from "react";
import { listOption } from "@/components/screens/homework/listOption";
import HomeWorkTable from "@/components/ui/homework/table/HomeWorkTable";

const Homework: NextPage = () => {
  const [currentOption, setCurrentOption] = useState(listOption[0]);

  return (
    <main className={styles.homework}>
      <div className={styles.homework_titleWrapper}>
        <h2 className={styles.schedule_title}>
          Ти виконав усі домашні завдання?
        </h2>
        <SelectedCustom
          list={listOption}
          currentValue={currentOption}
          setValue={setCurrentOption}
          position={"right"}
        />
      </div>
      <HomeWorkTable />
    </main>
  );
};
export default Homework;
