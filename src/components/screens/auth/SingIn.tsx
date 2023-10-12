import { NextPage } from "next";

import styles from "./sing-in.module.scss";
import Image from "next/image";
import SingInForm from "@/components/screens/auth/form/SingInForm";

type Props = {};

const SingIn: NextPage<Props> = ({}) => {
  return (
    <div
      className={styles.singin}
      style={{
        backgroundImage: `url(${process.env.NEXT_URL}/img/auth-bg.png)`,
      }}
    >
      <div className={styles.singin_inner}>
        <div className={styles.singin_logoWrapper}>
          <Image
            className={styles.singin_logoImg}
            src={`${process.env.NEXT_URL}/img/logo.webp`}
            alt={"Logo"}
            width={959}
            height={959}
          />
          <p className={styles.singin_logoText}>
            Intellecta<span>.</span>
          </p>
        </div>
        <SingInForm />
      </div>
    </div>
  );
};
export default SingIn;
