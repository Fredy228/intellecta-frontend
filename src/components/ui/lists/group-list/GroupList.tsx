"use client";

import { useState } from "react";
import { GridColDef } from "@mui/x-data-grid";

import styles from "./group-list.module.scss";

import { getAllGroups } from "@/axios/group";
import { GroupsInterface } from "@/interfaces/group";
import { outputError } from "@/services/output-error";
import { TGroupList } from "@/types/group";
import { CustomList } from "@/components/reused/custom-list/CustomList";
import { useMountEffect } from "@/hooks/useMountEffect";

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

  useMountEffect(() => {
    console.log("render");
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
  });

  return (
    <CustomList
      rows={groupsRows}
      columns={columns}
      getRowClassName={() => styles.groupRow}
    />
  );
};
