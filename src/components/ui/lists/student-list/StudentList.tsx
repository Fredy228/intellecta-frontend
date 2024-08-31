"use client";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";

import styles from "./student-list.module.scss";

import { getAllStudents } from "@/axios/students";
import { StudentInterface, StudentsInterface } from "@/interfaces/student";
import { TStudentList } from "@/types/student";
import { CustomList } from "@/components/reused/custom-list/CustomList";
import { FilterQueryType } from "@/types/user";
import { useFetch } from "@/hooks/useFetch";

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
    field: "email",
    headerName: "Пошта",
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

type StudentFetchType = {
  response: StudentsInterface | undefined;
  isLoading: boolean;
  fetchData: Function;
};

export const StudentList: FC<Props> = ({ filter }) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);
  const [studentsRows, setStudentsRows] = useState<TStudentList[]>();

  const createStudentsRows = (response: StudentsInterface) => {
    const rows = response.data.reduce((acc, { id, user }): any => {
      acc.push({
        id: id,
        fullName: `${user.firstName}${user.middleName ?? ""} ${user.lastName}`,
        email: user.email,
        avatar: user.image ?? "/img/profile/avatar.png",
      });
      return acc;
    }, [] as TStudentList[]);
    setStudentsRows(rows);
    setRowCount(response.total);
  };

  const { response, isLoading, fetchData }: StudentFetchType = useFetch(
    getAllStudents(1, [pageSize * page, pageSize * (page + 1) - 1], filter),
    createStudentsRows
  );

  useEffect(() => {
    fetchData();
  }, [filter, page, pageSize]);

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
