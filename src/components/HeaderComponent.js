import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import logo from "../images/MyFitnessColoradoLogo.jpg";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const HeaderImg = styled.div`
  background-image: url(${logo});
  width: 45px;
  height: 45px;
  background-repeat: no-repeat;
`;

function HeaderComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }


  return (
    <Fragment>
      <AppBar position="static" style={{ background: "#ffffff" }}>
        <Toolbar>
          <IconButton onClick={handleClick}>
            <MenuIcon/>
          </IconButton>

          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >  
        <MenuItem onClick={handleClose} component={Link} to="/"> Home </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/Workouts" > Workouts </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/Nutrition"> Nutrition </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/Contact"> Contact </MenuItem>
      </Menu>

          <HeaderImg></HeaderImg>
          <Typography style={{ color: "#000000" }}>
            My Fitness Colorado
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default HeaderComponent;
