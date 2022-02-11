import React, { useState , useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { callApi } from "../api/api";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const columns = [
  {
    headerName: "Name",
    field: "name",
    checkboxSelection: false,
  },
  {
    headerName: "Age",
    field: "age",
  },
  {
    headerName: "Town",
    field: "town",
  },
  {
    headerName: "State",
    field: "state",
  },
  {
    headerName: "Mobile",
    field: "mobile",
  },
  {
    headerName: "Availiblity",
    field: "service",
  },
];
const defaultColDef = {
  sortable: true,
  editable: false,
  filter: true,
  floatingFilter: true,
  flex: 1,
};

export const Table = () => {
  const [tableRowData, setTableRowData] = useState([]);

  //api configuration
  const config = {
    method: 'get',
    url: '/getData',
    headers: {
      Accept: 'application/json, text/plain',
    },
  }

  // api calling
  useEffect(() => {
      async function fetchData() {
        const request = await callApi(config);
        const response = request.data;
        setTableRowData(response)
        console.log(response)
        return request;
      }
      fetchData();
  },[])

  return (
    <div className="ag-theme-alpine" style={{ height: 1000, width: "100%" }}>
      <AgGridReact
        rowData={tableRowData}
        columnDefs={columns}
        defaultColDef={defaultColDef}
      />
    </div>
  );
};
