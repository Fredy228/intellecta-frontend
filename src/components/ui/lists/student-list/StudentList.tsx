"use client";
import { useState } from "react";
import Image from "next/image";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";

import styles from "./student-list.module.scss";

import { getAllStudents } from "@/axios/students";
import { StudentsInterface } from "@/interfaces/student";
import { outputError } from "@/services/output-error";
import { TStudentList } from "@/types/student";
import { CustomList } from "@/components/reused/custom-list/CustomList";
import { useMountEffect } from "@/hooks/useMountEffect";

export const StudentList = () => {
  const [studentsRows, setStudentsRows] = useState<TStudentList[]>();

  const columns: GridColDef<TStudentList>[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "fullName",
      headerName: "ФІО",
      flex: 1,
    },
    {
      field: "avatar",
      headerName: "Аватар",
      flex: 1,
      align: "center",
      headerClassName: styles.headerCenter,
      renderCell: (params: GridCellParams<TStudentList>) => (
        <Image
          src={String(params.value)}
          width={53}
          height={53}
          alt="user's avatar"
        />
      ),
    },
  ];

  useMountEffect(() => {
    getAllStudents(1, 2)
      .then((students: StudentsInterface) => {
        const rows = students.data.reduce((acc, { user, id }): any => {
          acc.push({
            id: id,
            fullName: `${user.firstName}${user.middleName ?? ""} ${
              user.lastName
            }`,
            avatar: user.image ?? "/img/profile/avatar.png",
          });
          return acc;
        }, [] as TStudentList[]);

        setStudentsRows(rows);
      })
      .catch((err) => outputError(err));
  });

  return (
    <CustomList
      rows={studentsRows}
      columns={columns}
      getRowClassName={() => styles.studentRow}
    />
  );
};
