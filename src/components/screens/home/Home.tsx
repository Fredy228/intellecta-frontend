"use client";

import { type NextPage } from "next";
import { useSelector } from "react-redux";

import styles from "./home.module.scss";

import ListSubjects from "@/components/ui/home/list-subjects/ListSubjects";
import Intro from "@/components/ui/home/intro/intro";
import { RoleEnum } from "@/enums/user/role-enum";
import { selectProfile } from "@/redux/user/selectors";

const welcomeMessage = {
  [RoleEnum.STUDENT]: "Чому ще не на уроці",
  [RoleEnum.TEACHER]: "Ви готові викладати",
  [RoleEnum.OWNER_UNIVERSITY]: "Усе готово для навчання",
  [RoleEnum.MODER_UNIVERSITY]: "Усе готово для навчання",
  [RoleEnum.MAKER]: "Всі баги пофіксив",
};

const Home: NextPage = () => {
  const currentProfile = useSelector(selectProfile);

  return (
    <main className={styles.home}>
      <div>
        <h2 className={styles.home_title}>
          {currentProfile
            ? welcomeMessage[currentProfile.role]
            : "З чого почнемо"}
          ?
        </h2>
      </div>
      <div className={styles.home_wrapper}>
        <Intro />
        <ListSubjects />
      </div>
    </main>
  );
};

export default Home;
