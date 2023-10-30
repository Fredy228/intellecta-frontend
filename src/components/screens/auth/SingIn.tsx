"use client";

import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import styles from "./sing-in.module.scss";
import SingInForm from "@/components/screens/auth/form/SingInForm";
import { useEffect, useRef } from "react";

type Props = {};

const SingIn: NextPage<Props> = ({}) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session?.data) {
      router.push("/dashboard");
    }
  }, [session]);

  useEffect(() => {
    function moveBg(e: any) {
      if (divRef.current) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        divRef.current.style.transform =
          "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
      }
    }
    window.addEventListener("mousemove", moveBg);
    return () => {
      window.removeEventListener("mousemove", moveBg);
    };
  }, []);

  return (
    <div className={styles.singin}>
      <div
        ref={divRef}
        className={styles.singin_parallax}
        style={{
          backgroundImage: `url(${process.env.NEXT_URL}/img/auth-bg.png)`,
        }}
      ></div>
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
