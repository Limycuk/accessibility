import React from "react";
import PropTypes from "prop-types";
import { Router, Route } from "react-router-dom";

import history from "~/services/history";

import { withStyles } from "@material-ui/core/styles";
import Article from "~/pages/Article";
import Home from "~/pages/Home";
import Form from "~/pages/Form";
import List from "~/pages/List";

import styles from "./styles";
import Header from "../../Header";
import LeftBar from "../../LeftBar";

const Content = ({ classes }) => {
  return (
    <Router history={history}>
      <div className={classes.root}>
        <Route
          children={data => {
            return <Header {...data} />;
          }}
        />
        <LeftBar />
        <div className={classes.content}>
          <Route path="/" exact component={Home} />
          <Route path="/article" component={Article} />
          <Route path="/form" component={Form} />
          <Route path="/list" component={List} />
        </div>
      </div>
    </Router>
  );
};

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
