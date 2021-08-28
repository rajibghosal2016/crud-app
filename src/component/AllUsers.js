import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles,
  Button,
} from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../Service/api";

const useStyle = makeStyles({
  table: { width: "90%", margin: "50px 0 0 50px" },
  thead: {
    "& > *": {
      background: "#000000",
      color: "#ffffff",
      fontWeight: "500",
      fontSize: "18px",
    },
  },
  trow_body: {
    "& > *": {
      fontSize: "16px",
    },
  },
});

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyle();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  };
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow className={classes.trow_body} key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.usernam}e</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                color="primary"
                style={{ marginRight: "10px" }}
                to={`/edit/${user._id}`}
                component={Link}>
                Edit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  deleteUserData(user._id);
                }}>
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllUsers;
