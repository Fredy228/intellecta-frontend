import { CardProfile } from "@/components/ui/profile/card-profile/CardProfile";
import { Contacts } from "@/components/ui/profile/bars/contatc-profile/Contacts";
import { Friends } from "@/components/ui/profile/bars/friends/Friends";
import { AddBlock } from "@/components/ui/profile/bars/addBlock/AddBlock";
import { Achievement } from "@/components/ui/profile/bars/skills/achievements/Achievment";
import { Languages } from "@/components/ui/profile/bars/skills/languages/Languages";
import styles from "./profile.module.scss";
export const Account = () => {
  return (
    <main className={styles.main}>
      <CardProfile />
      <div className={styles.profile_container}>
        <div>
          <Contacts />
          <Friends />
          <AddBlock />
        </div>
        <div style={{flex: "1"}}>
          <div className={styles.courses_block}>
            <Achievement />
            <Languages />

          </div>
          <AddBlock />
        </div>
      </div>
    </main>
  );
};
