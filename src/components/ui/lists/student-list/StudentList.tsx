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
import { UserFilterType } from "@/types/user";
import { useSelector } from "react-redux";
import { selectProfile } from "@/redux/user/selectors";
import { RoleEnum } from "@/enums/user/role-enum";

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
  filter: UserFilterType;
};

export const StudentList: FC<Props> = ({ filter }) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);
  const [studentsRows, setStudentsRows] = useState<TStudentList[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const currProfile = useSelector(selectProfile);

  const fetchStudents = (filter?: UserFilterType) => {
    const idUniversity: number | null =
      currProfile?.role === RoleEnum.MODER_UNIVERSITY ||
      currProfile?.role === RoleEnum.OWNER_UNIVERSITY
        ? currProfile.university.id
        : null;

    if (!idUniversity) return;

    setIsLoading(true);

    getAllStudents(
      idUniversity,
      [pageSize * page, pageSize * (page + 1) - 1],
      filter
    )
      .then((students: StudentsInterface) => {
        const rows = students.data.map(({ id, user }) => {
          return {
            id,
            fullName: `${user.lastName}${user.middleName ?? ""} ${
              user.firstName
            }`,
            email: user.email,
            avatar: user.image ?? "/img/profile/avatar.png",
          };
        });

        setStudentsRows(rows);
        setRowCount(students.total);
      })
      .catch((err) => outputError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchStudents(filter);
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
