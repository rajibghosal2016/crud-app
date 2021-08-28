import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { React, useState, useEffect } from "react";
import { editUser, getUsers } from "../Service/api";
import { useHistory, useParams } from "react-router";

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: "20px",
    },
  },
});

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUsers = () => {
  const [user, setUser] = useState(initialValues);
  const { name, username, email, phone } = user;
  const { id } = useParams();
  const classes = useStyle();
  const history = useHistory();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const response = await getUsers(id);
        console.log(response.data);
        setUser(response.data);
      } catch (err) {
        history.push("/");
      }
    };
    loadUserData();
  }, [id, history]);

  const editUserDetails = async () => {
    await editUser(id, user);
    history.push("/");
  };

  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input name="name" value={name} onChange={(e) => onChangeValue(e)} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input
          name="username"
          value={username}
          onChange={(e) => onChangeValue(e)}
        />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name="email" value={email} onChange={(e) => onChangeValue(e)} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input name="phone" value={phone} onChange={(e) => onChangeValue(e)} />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => editUserDetails()}>
        Edit User
      </Button>
    </FormGroup>
  );
};

export default EditUsers;
