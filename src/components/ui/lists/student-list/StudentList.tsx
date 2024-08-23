"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DataGrid, GridCellParams, GridColDef } from "@mui/x-data-grid";

import styles from "./student-list.module.scss";

import { getAllStudents } from "@/axios/students";
import { StudentsInterface } from "@/interfaces/student";
import { outputError } from "@/services/output-error";
import { TStudentList } from "@/types/student";

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

  useEffect(() => {
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
      rows={studentsRows}
      columns={columns}
      getRowClassName={() => styles.studentRow}
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
