import React from "react";
import DocumentTitle from "react-document-title";

import { withStyles } from "@material-ui/core/styles";

import Accessibility from "../../images/accessibility.jpg";
import styles from "./styles";

const Home = ({ classes }) => {
  return (
    <DocumentTitle title="Accessibility">
      <main className={classes.container}>
        <img
          className={classes.logo}
          src={Accessibility}
          alt="Accessibility logo"
        />
        <h1>Accessibility</h1>
      </main>
    </DocumentTitle>
  );
};

Home.propTypes = {};

export default withStyles(styles)(Home);
