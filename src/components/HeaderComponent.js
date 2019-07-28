import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from  "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import logo from "../images/MyFitnessColorado_AppBar.jpg";

function HeaderComponent() {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
		  <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="headline" color="inherit">
            My Fitness Colorado
          </Typography>
		  <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/workouts"> Workouts </Link>
        </li>
        <li>
          <Link to="/nutrition"> Nutrition </Link>
        </li>
        <li>
          <Link to="/contact"> Contact </Link>
        </li>
      </ul>
        </Toolbar>
      </AppBar>
      
    </Fragment>
  );
}

export default HeaderComponent;
