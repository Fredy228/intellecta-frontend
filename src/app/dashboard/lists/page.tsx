import Lists from "@/components/screens/lists/Lists";
import { RoleEnum } from "@/enums/user/role-enum";
import { RoleWrapper } from "@/components/providers/role-wrapper";

export default function ListsPage() {
  return (
    <RoleWrapper roles={[RoleEnum.MODER_UNIVERSITY, RoleEnum.OWNER_UNIVERSITY]}>
      <Lists type="" />
    </RoleWrapper>
  );
}
