import React, { Fragment } from "react";
import { Tabs, Tab } from "@material-ui/core";
import { SocialIcon } from "react-social-icons";

function FooterComponent() {
  return (
    <Fragment>
      <Tabs>
        <p>© 2019 MyFitnessColorado</p>

        <Tab
          icon={
            <SocialIcon network="facebook" style={{ height: 25, width: 25 }} />
          }
          label="Facebook"
        />
        <Tab
          icon={
            <SocialIcon network="instagram" style={{ height: 25, width: 25 }} />
          }
          label="Instagram"
        />
        <Tab
          icon={
            <SocialIcon network="snapchat" style={{ height: 25, width: 25 }} />
          }
          label="Snapchat"
        />
      </Tabs>
    </Fragment>
  );
}

export default FooterComponent;
