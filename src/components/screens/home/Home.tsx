"use client";

import { type NextPage } from "next";
import { useSelector } from "react-redux";

import styles from "./home.module.scss";

import ListSubjects from "@/components/ui/home/list-subjects/ListSubjects";
import Intro from "@/components/ui/home/intro/intro";
import { RoleEnum } from "@/enums/user/role-enum";
import { selectProfile, selectUser } from "@/redux/user/selectors";

const Home: NextPage = () => {
  const currentProfile = useSelector(selectProfile);

  return (
    <main className={styles.home}>
      <div>
        <h2 className={styles.home_title}>
          {(currentProfile?.role === RoleEnum.STUDENT ||
            currentProfile?.role === null) &&
            "Чому ще не на уроці"}
          {currentProfile?.role === RoleEnum.TEACHER && "Ви готові викладати"}
          {currentProfile?.role === RoleEnum.OWNER_UNIVERSITY &&
            "Усе готово для навчання"}
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
