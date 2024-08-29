"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";

import styles from "./student-list.module.scss";

import { getAllStudents } from "@/axios/students";
import { StudentsInterface } from "@/interfaces/student";
import { outputError } from "@/services/output-error";
import { TStudentList } from "@/types/student";
import { CustomList } from "@/components/reused/custom-list/CustomList";
import { useMountEffect } from "@/hooks/useMountEffect";
import { FilterQueryType } from "@/types/user";

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

type Props = {
  filter: FilterQueryType;
};

export const StudentList: FC<Props> = ({ filter }) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);
  const [studentsRows, setstudentsRows] = useState<TStudentList[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchstudents = (filter?: FilterQueryType) => {
    setIsLoading(true);

    getAllStudents(1, 2, [pageSize * page, pageSize * (page + 1) - 1], filter)
      .then((students: StudentsInterface) => {
        const rows = students.data.reduce((acc, { id, user }): any => {
          acc.push({
            id: id,
            fullName: `${user.firstName}${user.middleName ?? ""} ${
              user.lastName
            }`,
            avatar: user.image ?? "/img/profile/avatar.png",
          });
          return acc;
        }, [] as TStudentList[]);

        setstudentsRows(rows);
        setRowCount(students.total);
      })
      .catch((err) => outputError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchstudents(filter);
  }, [filter, page, pageSize]);

  useMountEffect(() => {
    fetchstudents();
  });

  return (
    <CustomList
      rows={studentsRows}
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
