import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { React, useState } from "react";
import { addUser } from "../Service/api";
import { useHistory } from "react-router";

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

const AddUsers = () => {
  const [user, setUser] = useState(initialValues);
  const { name, username, email, phone } = user;
  const classes = useStyle();
  const history = useHistory();

  const addUserDetails = async () => {
    console.log(user);
    await addUser(user);
    history.push("/");
  };

  const onChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add User</Typography>
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
        onClick={() => addUserDetails()}>
        Add User
      </Button>
    </FormGroup>
  );
};

export default AddUsers;
