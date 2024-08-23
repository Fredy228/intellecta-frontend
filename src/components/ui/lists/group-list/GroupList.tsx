"use client";

import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import styles from "./group-list.module.scss";

import { getAllGroups } from "@/axios/group";
import { GroupsInterface } from "@/interfaces/group";
import { outputError } from "@/services/output-error";
import { TGroupList } from "@/types/group";

export const GroupList = () => {
  const [groupsRows, setGroupsRows] = useState<TGroupList[]>();

  const columns: GridColDef<TGroupList>[] = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Назва",
      flex: 1,
    },
    {
      field: "level",
      headerName: "Номер курсу",
      flex: 1,
      align: "center",
      headerClassName: styles.headerCenter,
    },
  ];

  useEffect(() => {
    getAllGroups(1)
      .then((students: GroupsInterface) => {
        const rows = students.data.reduce((acc, { id, level, name }) => {
          acc.push({
            id,
            level,
            name,
          });
          return acc;
        }, [] as TGroupList[]);

        setGroupsRows(rows);
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
      rows={groupsRows}
      columns={columns}
      getRowClassName={() => styles.groupRow}
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
