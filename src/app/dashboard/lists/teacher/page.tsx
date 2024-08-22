"use client";

import Lists from "@/components/screens/lists/Lists";
import { TeacherList } from "@/components/ui/lists/teacher-list/TeacherList";

export default function TeacherListPage() {
  return (
    <Lists path="teacher">
      <TeacherList />
    </Lists>
  );
}
