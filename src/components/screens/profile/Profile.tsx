"use client";
import styles from "./profile.module.scss";
import { TUniversityProfile } from "@/types/profile";
import { ProfileInstitution } from "@/components/screens/profile/ProfileInstitution";

export const Profile = ({ type }: { type: "university" | "student" }) => {
  if (type === "student") {
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
