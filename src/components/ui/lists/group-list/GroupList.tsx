"use client";

import { FC, useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";

import styles from "./group-list.module.scss";

import { getAllGroups } from "@/axios/group";
import { GroupsInterface } from "@/interfaces/group";
import { outputError } from "@/services/output-error";
import { GroupFilterType, TGroupList } from "@/types/group";
import { CustomList } from "@/components/reused/custom-list/CustomList";
import { isFetch } from "@/redux/list/selectors";
import { useSelector } from "react-redux";

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

type Props = {
  filter: GroupFilterType;
};

export const GroupList: FC<Props> = ({ filter }) => {
  const actionFetch = useSelector(isFetch);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);
  const [groupsRows, setGroupsRows] = useState<TGroupList[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchGroups = (filter?: GroupFilterType) => {
    setIsLoading(true);

    getAllGroups(1, [pageSize * page, pageSize * (page + 1) - 1], filter)
      .then((groups: GroupsInterface) => {
        const rows = groups.data.map(({ id, level, name }) => {
          return {
            id,
            level,
            name,
          };
        });

        setGroupsRows(rows);
        setRowCount(groups.total);
      })
      .catch((err) => outputError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchGroups(filter);
  }, [filter, page, pageSize, actionFetch]);

  return (
    <CustomList
      rows={groupsRows}
      columns={columns}
      paginationMode="server"
      initialState={{
        pagination: {
          paginationModel: {
            page: page,
            pageSize: pageSize,
          },
        },
      }}
      pageSizeOptions={[10, 15, 20]}
      rowCount={rowCount}
      onPaginationModelChange={({ pageSize, page }) => {
        setPage(page);
        setPageSize(pageSize);
      }}
      loading={isLoading}
      getRowClassName={() => styles.studentRow}
    />
  );
};
