import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import styles from './styles';
import Header from '../../Header';
import LeftBar from '../../LeftBar';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;

const Content = ({ classes }) => {
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Header />
        <LeftBar />
        <div className={classes.content}>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </div>
    </BrowserRouter>
  );
};

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
