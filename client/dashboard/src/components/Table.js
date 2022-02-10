import React, { useState , useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import { callApi } from "../api/api";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import axios from "axios";

export const Table = () => {
  const [data, setItems] = useState([]);
  useEffect(() => {
      axios.get("http://localhost:5000/getData")
      .then( res => {
          console.log(res);
      })
      .catch(err => {
          console.log(err);
      })
  })
  
//   const data = [
//     {
//       name: "Dan",
//       age: "20",
//       town: "Dhanbad",
//       state: "Jharkhand",
//       phno: "8757014613",
//       serviceble: "false",
//     },
//     {
//       name: "Tan",
//       age: "22",
//     },
//     {
//       name: "Pan",
//       age: "30",
//     },
//     {
//       name: "San",
//       age: "21",
//     },
//     {
//       name: "Ran",
//       age: "26",
//     },
//     {
//       name: "Tan",
//       age: "18",
//     },
//     {
//       name: "Dan",
//       age: "24",
//     },
//   ];
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
      headerName: "Phno",
      field: "phno",
    },
    {
      headerName: "Availiblity",
      field: "serviceble",
    },
  ];
  const defaultcolDef = {
    sortable: true,
    editable: false,
    filter: true,
    floatingFilter: true,
    flex: 1,
  };
  return (
    <div className="ag-theme-alpine" style={{ height: 1000, width: "100%" }}>
      <AgGridReact
        rowData={data}
        columnDefs={columns}
        defaultColDef={defaultcolDef}
      />
    </div>
  );
};
