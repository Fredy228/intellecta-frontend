"use client";
import { ProfileHeader } from "@/components/ui/profile/profile-header/ProfileHeader";
import { ProfilePeopleCount } from "@/components/ui/profile/bars/people-count/ProfilePeopleCount";
import { AddBlock } from "@/components/ui/profile/bars/addBlock/AddBlock";
import styles from "./profile.module.scss";
import { TUniversityProfile } from "@/types/profile";
import { ProfileContactsUniversity } from "@/components/ui/profile/bars/contact-profile/ProfileContactsUniversity";
import { Rating } from "@/components/ui/profile/bars/rating/Rating";
import { Structures } from "@/components/ui/profile/bars/structures/Structures";
export const ProfileInstitution = ({ user }: { user: TUniversityProfile }) => {
  return (
    <main className={styles.main}>
      <ProfileHeader
        avatar={user.image}
        name={user.name}
        subtitle={user.shortName}
        role={"Заклад вищої освіти"}
      />
      <div className={styles.profile_container}>
        <div>
          <Rating rating={user.rating} />
          <ProfileContactsUniversity contacts={user.info} />
          <div className={styles.people_counts}>
            <ProfilePeopleCount
              count={user.teachers}
              title={"Викладачів"}
              color={"#4E92ED"}
            />
            <ProfilePeopleCount
              count={user.students}
              title={"Студентів"}
              color={"#ff754c"}
            />
          </div>
        </div>
        <div style={{ flex: "1" }}>
          <div className={styles.courses_block}>
            <Structures list={user.structures} />
          </div>
          <AddBlock />
        </div>
      </div>
    </main>
  );
};
