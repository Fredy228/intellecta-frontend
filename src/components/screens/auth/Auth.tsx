"use client";

import { type NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { redirect, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import styles from "./auth.module.scss";

import AuthForm from "@/components/screens/auth/form/AuthForm";
import LoaderPage from "@/components/reused/loader/loader-page";

const Auth: NextPage = () => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();
  const session = useSession();

  const isRegister = pathname === "/auth/register";

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

  if (session.status === "loading") return <LoaderPage isFull={true} />;
  if (session.status === "authenticated") redirect("/dashboard");

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
        <div className={styles.singin_wrapperForm}>
          <AuthForm isRegister={isRegister} />
        </div>
      </div>
    </div>
  );
};
export default Auth;
