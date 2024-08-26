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

export const GroupList = () => {
  const [groupsRows, setGroupsRows] = useState<TGroupList[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useMountEffect(() => {
    setIsLoading(true);
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
      .catch((err) => outputError(err))
      .finally(() => setIsLoading(false));
  });

  return (
    <CustomList
      rows={groupsRows}
      columns={columns}
      loading={isLoading}
      getRowClassName={() => styles.groupRow}
    />
  );
};
