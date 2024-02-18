"use client";
import { ProfileHeader } from "@/components/ui/profile/profile-header/ProfileHeader";
import { Contacts } from "@/components/ui/profile/bars/contatc-profile/Contacts";
import { Friends } from "@/components/ui/profile/bars/friends/Friends";
import { AddBlock } from "@/components/ui/profile/bars/addBlock/AddBlock";
import { Achievement } from "@/components/ui/profile/bars/skills/achievements/Achievment";
import { Skills } from "@/components/ui/profile/bars/skills/languages/Skills";
import styles from "./profile.module.scss";
import { TStudentProfile } from "@/types/profile";
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
          <Contacts contacts={user.info} />
          <Friends />
          <AddBlock />
        </div>
        <div style={{ flex: "1" }}>
          <div className={styles.courses_block}>
            <Achievement achievements={user.achievements} />
            <Skills skills={user.skills} rating={user.rating} />
          </div>
          <AddBlock />
        </div>
      </div>
    </main>
  );
};
