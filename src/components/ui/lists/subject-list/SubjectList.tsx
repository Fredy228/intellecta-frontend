"use client";

import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { GridCellParams, GridColDef } from "@mui/x-data-grid";

import styles from "./subject-list.module.scss";

import { outputError } from "@/services/output-error";
import { CustomList } from "@/components/reused/custom-list/CustomList";
import { SubjectFilterType, TSubjectList } from "@/types/subject";
import { getAllSubjects } from "@/axios/subject";
import { SubjectInterface, SubjectsInterface } from "@/interfaces/subject";
import { isFetch } from "@/redux/list/selectors";

const columns: GridColDef<TSubjectList>[] = [
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
    field: "short_name",
    headerName: "Скорочена назва",
    flex: 1,
  },
  {
    field: "icon_name",
    headerName: "Іконка",
    flex: 1,
    align: "center",
    headerClassName: styles.headerCenter,
    renderCell: (params: GridCellParams<TSubjectList>) => (
      <Image
        src={"/img/profile/mentore-img.png"}
        width={53}
        height={53}
        alt={String(params.value)}
      />
    ),
  },
];

type Props = {
  filter: SubjectFilterType;
};

export const SubjectList: FC<Props> = ({ filter }) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [rowCount, setRowCount] = useState(0);
  const [subjectsRows, setSubjectsRows] = useState<SubjectInterface[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchSubjects = (filter?: SubjectFilterType) => {
    setIsLoading(true);
    getAllSubjects(1, [pageSize * page, pageSize * (page + 1) - 1], filter)
      .then((subjects: SubjectsInterface) => {
        const rows = subjects.data.map(
          ({ id, name, short_name, icon_name }) => {
            return {
              id,
              name,
              short_name,
              icon_name: icon_name,
            };
          }
        );
        setSubjectsRows(rows);
        setRowCount(subjects.total);
      })
      .catch((err) => outputError(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchSubjects(filter);
  }, [filter, page, pageSize, isFetch]);

  return (
    <CustomList
      rows={subjectsRows}
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
      getRowClassName={() => styles.subjectRow}
    />
  );
};
