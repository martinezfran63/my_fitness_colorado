import React from "react";
import logo from "../logo.svg";
import { Grid } from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item sm>
          Home page!
        </Grid>
        <Grid item sm>

            <img src={logo} className="App-logo" alt="logo" />


        </Grid>
      </Grid>
    );
  }
}

export default Home;
