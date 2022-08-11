import React from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { UserRows } from "../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Userlist() {
  const [data, setData] = useState(UserRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },

    {
      field: "username",
      headerName: "Team",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.Avater} alt="" />
            {params.row.username}
          </div>
        );
      },
    },

    { field: "email", headerName: "Email", width: 130 },

    {
      field: "status",
      headerName: "Status",
      type: "number",
      width: 90,
    },

    {
      field: "transaction",
      headerName: "Transaction Volume",
      type: "number",
      width: 90,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>

            <DeleteOutlineIcon
              className="userDeleteOutlineIcon"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
