import Lists from "@/components/screens/lists/Lists";
import { StudentList } from "@/components/ui/lists/student-list/StudentList";

export default function StudentListPage() {
  return (
    <Lists path="student">
      <StudentList />
    </Lists>
  );
}
