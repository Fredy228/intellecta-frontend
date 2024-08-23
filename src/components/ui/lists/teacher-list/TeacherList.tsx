"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";

import styles from "./teacher-list.module.scss";

import { getAllTeachers } from "@/axios/teacher";
import { TeachersInterface } from "@/interfaces/teacher";
import { outputError } from "@/services/output-error";
import { TTeacherList } from "@/types/teacher";

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

  useEffect(() => {
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
  }, []);

  return (
    <DataGrid
      sx={{
        height: "92%",
        border: "none !important",
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "transparent",
        },
        "--DataGrid-rowBorderColor": "transparent",
        "--DataGrid-containerBackground": "transparent",
        ".MuiDataGrid-topContainer": {
          borderBottom: "1px solid #0000001f",
        },
        ".MuiDataGrid-cell": {
          padding: "0",
          fontSize: "14px",
          fontWeight: "400",
          color: "#808191",
        },
        ".MuiDataGrid-columnHeader": {
          padding: "0",
          fontSize: "14px",
          fontWeight: "500",
          color: "#808191",
        },
        ".MuiDataGrid-overlay": {
          background: "transparent",
          fontSize: "16px",
          fontWeight: "500",
          color: "#808191",
        },
      }}
      rows={teachersRows}
      columns={columns}
      getRowClassName={() => styles.teacherRow}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      disableRowSelectionOnClick
      disableColumnResize
    />
  );
};
