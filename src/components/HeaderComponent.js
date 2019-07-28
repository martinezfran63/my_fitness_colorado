import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

function HeaderComponent() {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar></Toolbar>
      </AppBar>
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
    </Fragment>
  );
}

export default HeaderComponent;
