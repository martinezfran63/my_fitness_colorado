import React from "react";
import logo from "../images/rocky_mountains.jpg";
import { Grid, Typography } from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item sm style={{ margin: 15 }}>
          <Typography variant="h2" gutterBottom>
            Find support and encouragement from the most positive community on
            the web.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Our community forum is a great place to share helpful workout and
            nutrition information and cheer each other on. Share tips,
            challenges and triumphs, results and progress with Fitness Blender
            members from all over the world.
          </Typography>

          <Typography variant="subtitle2" gutterBottom>
            <a href="/workout">Learn more here</a>
          </Typography>
        </Grid>
        <Grid item sm style={{ margin: 15 }}> 
          <img src={logo} className="App-logo" alt="logo" />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
