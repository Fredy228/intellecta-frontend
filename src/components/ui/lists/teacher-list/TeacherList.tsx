"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";

import styles from "./teacher-list.module.scss";

import { getAllTeachers } from "@/axios/teacher";
import { TeachersInterface } from "@/interfaces/teacher";
import { outputError } from "@/services/output-error";
import { TTeacherList } from "@/types/teacher";
import { CustomList } from "@/components/reused/custom-list/CustomList";
import { UserFilterType } from "@/types/user";
import { isFetch } from "@/redux/list/selectors";
import { useSelector } from "react-redux";
import { selectProfile } from "@/redux/user/selectors";
import { RoleEnum } from "@/enums/user/role-enum";

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

type Props = {
  filter: UserFilterType;
};

export const TeacherList: FC<Props> = ({ filter }) => {
  const actionFetch = useSelector(isFetch);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);
  const [teachersRows, setTeachersRows] = useState<TTeacherList[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const currProfile = useSelector(selectProfile);

  const fetchTeachers = (filter?: UserFilterType) => {
    const idUniversity: number | null =
      currProfile?.role === RoleEnum.MODER_UNIVERSITY ||
      currProfile?.role === RoleEnum.OWNER_UNIVERSITY
        ? currProfile.university.id
        : null;

    if (!idUniversity) return;

    setIsLoading(true);

    getAllTeachers(
      idUniversity,
      [pageSize * page, pageSize * (page + 1) - 1],
      filter
    )
      .then((teachers: TeachersInterface) => {
        const rows = teachers.data.map(({ id, user }) => {
          return {
            id,
            fullName: `${user.lastName}${user.middleName ?? ""} ${
              user.firstName
            }`,
            email: user.email,
            avatar: user.image ?? "/img/profile/avatar.png",
          };
        });

        setTeachersRows(rows);
        setRowCount(teachers.total);
      })
      .catch((err) => outputError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchTeachers(filter);
  }, [filter, page, pageSize, actionFetch]);

  return (
    <CustomList
      rows={teachersRows}
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
      getRowClassName={() => styles.teacherRow}
    />
  );
};
