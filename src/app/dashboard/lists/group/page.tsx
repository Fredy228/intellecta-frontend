import Lists from "@/components/screens/lists/Lists";
import { GroupList } from "@/components/ui/lists/group-list/GroupList";

export default function GroupListPage() {
  return (
    <Lists path="group">
      <GroupList />
    </Lists>
  );
}
