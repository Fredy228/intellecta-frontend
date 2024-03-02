"use client";
import { ProfileHeader } from "@/components/ui/profile/profile-header/ProfileHeader";
import { ProfileContactsUser } from "@/components/ui/profile/bars/contact-profile/ProfileContactsUser";
import { ProfilePeopleCount } from "@/components/ui/profile/bars/people-count/ProfilePeopleCount";
import { AddBlock } from "@/components/ui/profile/bars/addBlock/AddBlock";
import { Achievement } from "@/components/ui/profile/bars/successes/achievements/Achievment";
import { Skills } from "@/components/ui/profile/bars/successes/skills/Skills";
import styles from "./profile.module.scss";
import { TStudentProfile } from "@/types/profile";
import { Rating } from "@/components/ui/profile/bars/rating/Rating";
import { VerticalLine } from "@/components/reused/vertical-line/VerticalLine";

export const ProfileUser = ({ user }: { user: TStudentProfile }) => {
  return (
    <main className={styles.main}>
      <ProfileHeader
        avatar={user.avatar}
        name={`${user.firstName} ${user.lastName}`}
        role={user.role}
        subtitle={user.subtitle}
      />
      <div className={styles.profile_container}>
        <div>
          <Rating rating={user.rating} />
          <ProfileContactsUser contacts={user.info} />
          <ProfilePeopleCount
            count={user.friends}
            title={"Друзів"}
            color={"#ff754c"}
          />
          <AddBlock />
        </div>
        <div style={{ flex: "1" }}>
          <div className={styles.courses_block}>
            <Achievement achievements={user.achievements} />
            <VerticalLine
              color={"#d9d9d9"}
              size={2}
              rounded={true}
              className={styles.vertical_line}
            />
            <Skills skills={user.skills} />
          </div>
          <AddBlock />
        </div>
      </div>
    </main>
  );
};
