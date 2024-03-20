"use client";
import styles from "./profile.module.scss";
import { TStudentProfile, TUniversityProfile } from "@/types/profile";
import { ProfileUser } from "@/components/screens/profile/ProfileUser";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/user/selectors";
import { ProfileInstitution } from "@/components/screens/profile/ProfileInstitution";
import {
  IconProfileCalendar,
  IconProfileInventation,
  IconProfileMentor,
  IconProfilePro,
  IconProfileQa,
  IconProfileVerify,
} from "@/components/reused/Icon/Icon";

export const Profile = ({ type }: { type: "university" | "student" }) => {
  if (type === "student") {
    const user = useSelector(selectUser);

    if (!user) return;

    let profile: TStudentProfile = {
      type: "student",
      subtitle: "User at Intellecta",
      role: "користувач",
      firstName: user.firstName,
      lastName: user.lastName,
      friends: 525,
      id: 1,
      info: {
        mail: user.email,
        tel: "+38 (099) 999 9999",
        link: "intellecta.com.ua",
        location: "Одеса, Україна",
        birthday: "13 вер, 2000",
      },
      rating: 7.5,
      skills: [
        "python",
        "c#",
        "golang",
        "coding",
        "back-end",
        "full-stack",
        "ментор",
        "верстка",
      ],
      achievements: [
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
      ],
      avatar: user.image,
    };

    return <ProfileUser user={profile} />;
  } else if (type === "university") {
    let profile: TUniversityProfile = {
      id: 0,
      image: `${process.env.NEXT_URL}/img/profile/nu-oua-avatar.png`,
      info: {
        rector: "Тодощак Олег Володимирович",
        mail: "nu.oua@gmail.com",
        location: "вул. Фонтанська дорога, 23, Одеса, Україна",
        link: "alekseii.com.ua",
        foundationYear: 1997,
      },
      name: 'Національний університет "Одеська юридична академія"',
      rating: 7.5,
      shortName: 'НУ "ОЮА"',
      students: 10432,
      teachers: 305,
      type: "university",
      univType: "university",
      structures: [
        {
          id: 1,
          avatar: `${process.env.NEXT_URL}/img/profile/fac_cgu.png`,
          title: "ФАКУЛЬТЕТ ЦИВІЛЬНОЇ ТА ГОСПОДАРСЬКОЇ ЮСТИЦІЇ",
        },
        {
          id: 2,
          avatar: `${process.env.NEXT_URL}/img/profile/fac_kit.png`,
          title: "ФАКУЛЬТЕТ КІБЕРБЕЗПЕКИ ТА ІНФОРМАЦІЙНИХ ТЕХНОЛОГІЙ",
        },
        {
          id: 3,
          avatar: `${process.env.NEXT_URL}/img/profile/fac_myk_ip.png`,
          title: "МИКОЛАЇВСЬКИЙ НАВЧАЛЬНО-НАУКОВИЙ ІНСТИТУТ ПРАВА НУ«ОЮА»",
        },
      ],
    };

    return <ProfileInstitution user={profile} />;
  } else {
    return <main className={styles.main}>Невідомий тип профілю.</main>;
  }
};
