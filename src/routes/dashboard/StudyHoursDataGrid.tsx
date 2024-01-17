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
  { field: "id", headerName: "Week", flex: 1 },
  { field: "hours", headerName: "Hours", editable: true, flex: 1 },
];

function CustomGridToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
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
        borderColor: theme.palette.primary.dark,
        "& .MuiDataGrid-columnHeaders, & .MuiDataGrid-withBorderColor": {
          borderColor: theme.palette.primary.dark,
          fontSize: "1.2rem",
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.primary.dark,
        },
        "& .MuiDataGrid-cell": {
          borderBottom: 0,
        },
        "& .MuiDataGrid-row:hover": {
          backgroundColor: theme.palette.secondary.light,
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
