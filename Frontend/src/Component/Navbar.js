import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#111111",
  },
  tabs: {
    color: "#FFFFFF",
    marginRight: 20,
    textDecoration: "none",
    fontSize: 20,
  },
});

const NavBar = () => {
  const classes = useStyle();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <NavLink className={classes.tabs} to="/">
          Customer Management
        </NavLink>
        <NavLink className={classes.tabs} to="/">
          All Customers
        </NavLink>
        <NavLink className={classes.tabs} to="/add">
          Add Customer
        </NavLink>
        <NavLink className={classes.tabs} to="/gallery">
          Gallery
        </NavLink>
        <NavLink className={classes.tabs} to="/paginationTable">
          Pagination
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
