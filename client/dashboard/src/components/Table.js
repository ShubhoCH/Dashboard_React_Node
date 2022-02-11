import React, {useState, useEffect, useMemo} from "react";
import { AgGridReact } from "ag-grid-react";
import { callApi } from "../api/api";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";


export const Table = () => {
  const [tableRowData, setTableRowData] = useState([]);

  // grid styling
  const gridStyle = useMemo(() => ({
    height: '85vh',
    width: '95%'
  }), []);

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
    filter: true,
    floatingFilter: true,
    resizable: true,
    flex: 1,
  };


  return (
    <div className="ag-theme-alpine" style={gridStyle}>
      <AgGridReact
        rowData={tableRowData}
        columnDefs={columns}
        defaultColDef={defaultColDef}
        pivotPanelShow={'always'}
        pagination={true}
      />
    </div>
  );
};
