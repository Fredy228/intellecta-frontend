"use client";

import { Dispatch, type ReactNode, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { isAxiosError } from "axios";
import { useSearchParams } from "next/navigation";
import { get, set } from "local-storage";

import { getUser } from "@/axios/user";

import { setCurrentProfile, setUser } from "@/redux/user/slice";
import { setAuthorize, setLoadingApp } from "@/redux/slice-param";

export const AuthProviders = ({ children }: { children: ReactNode }) => {
  const dispacth: Dispatch<any> = useDispatch();
  const searchParams = useSearchParams();
  const tokenGoogle = searchParams.get("token");

  const isFirst = useRef<boolean>(false);

  useEffect(() => {
    if (!tokenGoogle && !get<string>("token")) {
      dispacth(setAuthorize(false));
      dispacth(setLoadingApp(false));
      return;
    }

    if (isFirst.current) return;
    isFirst.current = true;

    if (tokenGoogle && !get<string>("token")) {
      set<string>("token", tokenGoogle);
      const currentUrl = window.location.href;
      const url = new URL(currentUrl);
      url.searchParams.delete("token");
      window.history.replaceState({}, "", url.toString());
    }
    const getUserCurrent = async () => {
      console.log("Loading user...");
      try {
        const res = await getUser();
        dispacth(setUser(res));
        dispacth(setAuthorize(true));

        const idProfile = get<string>("curr_profile");
        if (
          idProfile &&
          Number(idProfile) &&
          res.profiles &&
          res.profiles.length > 0
        ) {
          const foundProfile = res.profiles.find(
            (i) => i.id === Number(idProfile),
          );
          if (foundProfile) {
            dispacth(setCurrentProfile(foundProfile));
            set("curr_profile", foundProfile.id);
          } else {
            dispacth(setCurrentProfile(res.profiles[0]));
            set("curr_profile", res.profiles[0].id);
          }
        } else if (res.profiles && res.profiles.length > 0) {
          dispacth(setCurrentProfile(res.profiles[0]));
          set("curr_profile", res.profiles[0].id);
        }
      } catch (e) {
        if (isAxiosError(e) && e.response?.status === 401) {
          dispacth(setAuthorize(false));
        } else {
          console.error(e);
        }
      } finally {
        dispacth(setLoadingApp(false));
      }
    };
    getUserCurrent();
  }, [dispacth, tokenGoogle]);

  return <>{children}</>;
};
