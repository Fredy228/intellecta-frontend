"use client";

import { type NextPage } from "next";
import { useSelector } from "react-redux";
import Image from "next/image";
import { PropsWithChildren, useEffect, useRef } from "react";
import { redirect, usePathname } from "next/navigation";

import styles from "./auth.module.scss";

import AuthForm from "@/components/screens/auth/form/AuthForm";
import LoaderPage from "@/components/reused/loader/loader-page";
import { selectIsAuthorize, selectIsLoadingApp } from "@/redux/selector-param";

const Auth: NextPage<PropsWithChildren> = ({ children }) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const pathname = usePathname();
  const isLoadingApp = useSelector(selectIsLoadingApp);
  const isAuthorize = useSelector(selectIsAuthorize);

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

  if (isLoadingApp) return <LoaderPage isFull={true} />;
  if (isAuthorize && !isLoadingApp) redirect("/dashboard");

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
        <div className={styles.singin_wrapperForm}>{children}</div>
      </div>
    </div>
  );
};
export default Auth;
