"use client";
import styles from "./profile.module.scss";
import { TStudentProfile, TUniversityProfile } from "@/types/profile";
import { ProfileUser } from "@/components/screens/profile/ProfileUser";
// import { ProfileInstitution } from "@/components/screens/profile/ProfileInstitution";

export const Profile = ({
  profile,
}: {
  profile: TUniversityProfile | TStudentProfile;
}) => {
  switch (profile.type) {
    case "student":
      return <ProfileUser user={profile} />;
    case "university":
    // return <ProfileInstitution user={profile} />;
    default:
      return <main className={styles.main}>Невідомий тип профілю.</main>;
  }
};
