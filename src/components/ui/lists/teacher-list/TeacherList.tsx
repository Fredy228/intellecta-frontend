"use client";

import { useState } from "react";
import Image from "next/image";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";

import styles from "./teacher-list.module.scss";

import { getAllTeachers } from "@/axios/teacher";
import { TeachersInterface } from "@/interfaces/teacher";
import { outputError } from "@/services/output-error";
import { TTeacherList } from "@/types/teacher";
import { CustomList } from "@/components/reused/custom-list/CustomList";
import { useMountEffect } from "@/hooks/useMountEffect";

export const TeacherList = () => {
  const [teachersRows, setTeachersRows] = useState<TTeacherList[]>();

  const columns: GridColDef<TTeacherList>[] = [
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
      renderCell: (params: GridCellParams<TTeacherList>) => (
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
    getAllTeachers(1, [])
      .then((teachers: TeachersInterface) => {
        const rows = teachers.data.reduce((acc, { id, user }): any => {
          acc.push({
            id: id,
            fullName: `${user.firstName}${user.middleName ?? ""} ${
              user.lastName
            }`,
            avatar: user.image ?? "/img/profile/avatar.png",
          });
          return acc;
        }, [] as TTeacherList[]);

        setTeachersRows(rows);
      })
      .catch((err) => outputError(err));
  });

  return (
    <CustomList
      rows={teachersRows}
      columns={columns}
      getRowClassName={() => styles.teacherRow}
    />
  );
};
