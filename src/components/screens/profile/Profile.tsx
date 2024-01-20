import { CardProfile } from "@/components/ui/profile/card-profile/CardProfile";
import { Contacts } from "@/components/ui/profile/bars/contatc-profile/Contacts";
import { Friends } from "@/components/ui/profile/bars/friends/Friends";
import { AddBlock } from "@/components/ui/profile/bars/addBlock/AddBlock";
import { Achievement } from "@/components/ui/profile/bars/skills/achievements/Achievment";
import { AddBlockSecond } from "@/components/ui/profile/bars/addBlock/second/addBlock";
import { Languages } from "@/components/ui/profile/bars/skills/languages/Languages";
import styles from "./profile.module.scss";
export const Account = () => {
  return (
    <main className={styles.main}>
      <CardProfile />
      <div className={styles.profileContainer}>
        <div>
          <Contacts />
          <Friends />
          <AddBlockSecond />
        </div>
        <div style={{flex: "1"}}>
          <div className={styles.coursesBlock}>
            <Achievement />
            <Languages />
          </div>
          <AddBlock />
        </div>
      </div>
    </main>
  );
};
