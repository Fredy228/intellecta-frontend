"use client";

import { ProfileHeader } from "@/components/ui/profile/profile-header/ProfileHeader";
import { ProfileContactsUser } from "@/components/ui/profile/bars/contact-profile/ProfileContactsUser";
import { ProfilePeopleCount } from "@/components/ui/profile/bars/people-count/ProfilePeopleCount";
import { AddBlock } from "@/components/ui/profile/bars/addBlock/AddBlock";
import { Achievement } from "@/components/ui/profile/bars/successes/achievements/Achievment";
import { Skills } from "@/components/ui/profile/bars/successes/skills/Skills";
import styles from "./profile.module.scss";
import { Rating } from "@/components/ui/profile/bars/rating/Rating";
import { VerticalLine } from "@/components/reused/vertical-line/VerticalLine";
import { useDispatch, useSelector } from "react-redux";
import { selectProfile, selectUser } from "@/redux/user/selectors";
import {
  IconProfileCalendar,
  IconProfileInventation,
  IconProfileMentor,
  IconProfilePro,
  IconProfileQa,
  IconProfileVerify,
} from "@/components/reused/Icon/Icon";
import { Dispatch, useEffect, useRef, useState } from "react";
import { getUserProfile } from "@/axios/user";
import LoaderPage from "@/components/reused/loader/loader-page";
import { setUserProfile } from "@/redux/user/slice";
import { getToastify } from "@/services/toastify";
import { ToastifyEnum } from "@/enums/toastify-enum";
import { redirect } from "next/navigation";
import { outputError } from "@/services/output-error";

const achievements = [
  {
    id: 1,
    icon: <IconProfileMentor />,
    bg: "linear-gradient(73deg, rgba(185,77,223,1) 0%, rgba(52,222,212,1) 100%)",
    borderRad: "",
    border: "",
    named: "Ментор",
  },
  {
    id: 2,
    icon: <IconProfileInventation />,
    bg: "linear-gradient(140deg, rgba(233,8,253,1) 0%, rgba(233,8,253,1) 34%, rgba(55,28,225,1) 91%)",
    borderRad: "",
    border: "",
    named: "Відмінник",
  },
  {
    id: 3,
    icon: <IconProfileQa />,
    bg: "linear-gradient(140deg, rgba(8,238,253,1) 5%, rgba(28,59,225,1) 91%)",
    borderRad: "",
    border: "",
    named: "Тестувальник",
  },
  {
    id: 4,
    icon: <IconProfilePro />,
    bg: "linear-gradient(140deg, rgba(233,8,253,1) 0%, rgba(233,8,253,1) 34%, rgba(55,28,225,1) 91%)",
    borderRad: "",
    border: "",
    named: "PRO-юзер",
  },
  {
    id: 5,
    icon: <IconProfileVerify />,
    bg: "linear-gradient(140deg, rgba(8,238,253,1) 5%, rgba(28,59,225,1) 91%)",
    borderRad: "",
    border: "",
    named: "Верифікований",
  },
  {
    id: 6,
    icon: <IconProfileCalendar />,
    bg: "linear-gradient(73deg, rgba(185,77,223,1) 0%, rgba(52,222,212,1) 100%)",
    borderRad: "",
    border: "",
    named: "Відвідувач",
  },
];

const skills = [
  "python",
  "c#",
  "golang",
  "coding",
  "back-end",
  "full-stack",
  "ментор",
  "верстка",
];

const ProfileUser = () => {
  const user = useSelector(selectUser);
  const profile = useSelector(selectProfile);
  const dispacth: Dispatch<any> = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isFirst = useRef<boolean>(false);

  useEffect(() => {
    if (isFirst.current) return;
    isFirst.current = true;

    getUserProfile()
      .then((data) => {
        console.log("profile", data);
        dispacth(setUserProfile(data));
      })
      .catch((e) => {
        outputError(e);
        redirect("/dashboard");
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <LoaderPage />;

  return (
    <main className={styles.main}>
      <ProfileHeader
        avatar={user?.image}
        name={`${user?.firstName} ${user?.lastName}`}
        role={profile?.role}
        subtitle={user?.bio}
      />
      <div className={styles.profile_container}>
        <div>
          <Rating rating={8.5} />
          <ProfileContactsUser />
          <ProfilePeopleCount count={523} title={"Друзів"} color={"#ff754c"} />
          <AddBlock />
        </div>
        <div style={{ flex: "1" }}>
          <div className={styles.courses_block}>
            <Achievement achievements={achievements} />
            <VerticalLine
              color={"#d9d9d9"}
              size={2}
              rounded={true}
              className={styles.vertical_line}
            />
            <Skills skills={skills} />
          </div>
          <AddBlock />
        </div>
      </div>
    </main>
  );
};

export default ProfileUser;
