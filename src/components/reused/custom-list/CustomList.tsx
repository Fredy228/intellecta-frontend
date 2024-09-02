import { DataGrid, DataGridProps } from "@mui/x-data-grid";
import { FC } from "react";

type Props = {
  variant?: DataGridProps;
} & Omit<DataGridProps, "variant">;

export const CustomList: FC<Props> = (props) => {
  return (
    <DataGrid
      sx={{
        height: "92%",
        border: "none !important",
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#f2f2f2",
        },
        "--DataGrid-rowBorderColor": "transparent",
        "--DataGrid-containerBackground": "transparent",
        ".MuiDataGrid-topContainer": {
          borderBottom: "1px solid #0000001f",
        },
        ".MuiDataGrid-cell": {
          display: "flex",
          alignItems: "center",
          paddinLeft: "10px",
          fontSize: "14px",
          fontWeight: "400",
          color: "#808191",
        },
        ".MuiDataGrid-columnHeader": {
          padding: "0 10px",
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
      {...props}
      rowHeight={67}
      disableRowSelectionOnClick
      disableColumnResize
    />
  );
};
