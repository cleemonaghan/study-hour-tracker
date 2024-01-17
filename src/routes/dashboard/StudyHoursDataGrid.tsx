import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";

const rows: GridRowsProp = [
  { id: 1, hours: 10 },
  { id: 2, hours: 11 },
  { id: 3, hours: 15 },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "Week", width: 150 },
  { field: "hours", headerName: "Hours", editable: true, width: 150 },
];

function CustomGridToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton
        sx={(theme) => ({ color: theme.palette.primary.dark })}
      />
      <GridToolbarFilterButton
        sx={(theme) => ({ color: theme.palette.primary.dark })}
      />
      <GridToolbarDensitySelector
        sx={(theme) => ({ color: theme.palette.primary.dark })}
      />
    </GridToolbarContainer>
  );
}

export default function StudyHoursDataGrid() {
  return (
    <DataGrid
      data-testid="study-hours-data-grid"
      rows={rows}
      columns={columns}
      hideFooterSelectedRowCount
      loading={false}
      sx={(theme) => ({
        color: theme.palette.secondary.dark,
        borderColor: theme.palette.secondary.dark,
        "& .MuiDataGrid-columnHeaders": {
          borderColor: theme.palette.secondary.dark,
        },
        "& .MuiDataGrid-cell": {
          borderBottom: 0,
        },
        "& .MuiDataGrid-row:hover": {
          backgroundColor: theme.palette.primary.light,
        },
        "& .MuiDataGrid-withBorderColor": {
          borderColor: theme.palette.secondary.dark,
        },
        overflowX: "hidden",
      })}
      slots={{
        toolbar: CustomGridToolbar,
      }}
      // onCellEditStop={(params: GridCellEditStopParams, event: MuiEvent) => {
      //   console.log(params);
      // }}
    />
  );
}
