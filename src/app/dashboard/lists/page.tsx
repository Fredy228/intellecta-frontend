"use client";

import Lists from "@/components/screens/lists/Lists";
import { RoleEnum } from "@/enums/user/role-enum";
import { RoleWrapper } from "@/components/providers/role-wrapper";
import { useSearchParams } from "next/navigation";

export default function ListsPage() {
  const params = useSearchParams();

  return (
    <RoleWrapper roles={[RoleEnum.MODER_UNIVERSITY, RoleEnum.OWNER_UNIVERSITY]}>
      <Lists type={params.get("type")} />
    </RoleWrapper>
  );
}
