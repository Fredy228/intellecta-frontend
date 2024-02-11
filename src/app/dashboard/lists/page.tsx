"use client";

import Lists from "@/components/screens/lists/Lists";
import { useEffect, useState } from "react";
import LoaderPage from "@/components/reused/loader/loader-page";
import { RoleEnum } from "@/enums/user/role-enum";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { selectIsAuthorize, selectIsLoadingApp } from "@/redux/selector-param";
import { selectUser } from "@/redux/user/selectors";

export default function ListsPage() {
  const user = useSelector(selectUser);
  const isLoadingApp = useSelector(selectIsLoadingApp);
  const isAuthorize = useSelector(selectIsAuthorize);

  const router = useRouter();

  if (isLoadingApp) return <LoaderPage />;
  if (!isAuthorize) return router.push("/auth/login");
  if (isAuthorize && user.role !== RoleEnum.ADMIN)
    return router.push("/dashboard");

  return <Lists />;
}
