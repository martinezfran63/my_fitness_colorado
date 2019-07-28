import React from "react";
import { Paper, Tabs, Tab } from "@material-ui/core";

function FooterComponent() {
  return (
    <div>
      <Paper>
        <Tabs>
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    </div>
  );
}

export default FooterComponent;
