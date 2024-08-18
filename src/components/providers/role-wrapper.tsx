"use client";

import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { redirect } from "next/navigation";

import { RoleEnum } from "@/enums/user/role-enum";
import { selectProfiles } from "@/redux/user/selectors";

export const RoleWrapper = ({
  children,
  roles,
}: {
  children: ReactNode;
  roles?: RoleEnum[];
}) => {
  const profiles = useSelector(selectProfiles);

  if (roles && roles.length > 0) {
    const notRole = profiles.every((item) => !roles.includes(item.role));
    if (notRole) redirect("/dashboard");
  }

  return <>{children}</>;
};
