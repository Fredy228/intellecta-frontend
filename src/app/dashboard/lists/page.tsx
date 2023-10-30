"use client";

import Lists from "@/components/screens/lists/Lists";
import { useSession } from "next-auth/react";
import { UserInterface } from "@/interfaces/user";
import { useEffect, useState } from "react";
import LoaderPage from "@/components/reused/loader/loader-page";
import { RoleEnum } from "@/enums/user/role-enum";
import { useRouter } from "next/navigation";

export default function ListsPage() {
  const { data } = useSession();
  const currentUser = data?.user as UserInterface;

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (data && currentUser?.role !== RoleEnum.ADMIN) {
      router.push("/dashboard");
    }
    if (currentUser?.role === RoleEnum.ADMIN) setIsLoading(false);
  }, [data]);

  return <>{isLoading ? <LoaderPage /> : <Lists />}</>;
}
