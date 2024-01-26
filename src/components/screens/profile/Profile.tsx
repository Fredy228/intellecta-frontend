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
          <Contacts />
          <Friends />
          <div className={styles.btn_container}>
              <AddBlock />
          </div>
              <Achievement/>
              <Languages/>
              <div className={styles.rate}>
                  <h2 className={styles.rate_title}>Рейтинг</h2>
                  <p className={styles.rate_numbers}>7.5/10</p>
              </div>
              <AddBlock/>
      </div>
    </main>
  );
};
