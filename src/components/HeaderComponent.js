import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from  "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import logo from "../images/MyFitnessColoradoLogo.jpg";
import styled from 'styled-components';

const HeaderImg = styled.div`
  background-image: url(${logo});
  width: 45px;
  height: 45px;
  background-repeat: no-repeat;
`;

function HeaderComponent() {
  return (
    <Fragment>
      <AppBar position="static" style={{ background: '#ffffff' }}>
        <Toolbar>
          <HeaderImg></HeaderImg>
          <Typography >
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
