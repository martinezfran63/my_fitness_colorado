import React from "react";
import logo from "../rocky_mountains.jpg";
import { Grid, Typography } from "@material-ui/core";

class Home extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item sm>
        <Typography variant="h2" gutterBottom>
        Find support and encouragement from the most positive community on the web.
      </Typography>

      <Typography variant="h6" gutterBottom>
      Our community forum is a great place to share helpful workout and nutrition information and cheer each other on. Share tips, challenges and triumphs, results and progress with Fitness Blender members from all over the world.
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        Learn more here
      </Typography>


        </Grid>
        <Grid item sm>

            <img src={logo} className="App-logo" alt="logo" />


        </Grid>
      </Grid>
    );
  }
}

export default Home;
