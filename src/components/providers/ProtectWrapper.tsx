"use client";

import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

import { selectIsAuthorize, selectIsLoadingApp } from "@/redux/selector-param";
import LoaderPage from "@/components/reused/loader/loader-page";
import { RoleEnum } from "@/enums/user/role-enum";
import { selectProfiles } from "@/redux/user/selectors";

export const ProtectWrapper = ({
  children,
  roles,
}: {
  children: ReactNode;
  roles?: RoleEnum[];
}) => {
  const isLoadingApp = useSelector(selectIsLoadingApp);
  const isAuthorize = useSelector(selectIsAuthorize);
  const currentProfiles = useSelector(selectProfiles);

  if (isLoadingApp) return <LoaderPage isFull={true} />;

  if (!isLoadingApp && !isAuthorize) redirect("/auth/login");

  if (roles && roles.length > 0) {
    const notRole = currentProfiles.every((item) => !roles.includes(item.role));
    if (notRole) redirect("/dashboard");
  }

  return <>{children}</>;
};
