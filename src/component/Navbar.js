import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#111111",
  },
  tabs: {
    color: "#ffffff",
    textDecoration: "none",
    marginRight: "20px",
    fontSize: "16px",
  },
});

const Navbar = () => {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <NavLink className={classes.tabs} to="/">
          All
        </NavLink>
        <NavLink className={classes.tabs} to="/add">
          Add User
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
