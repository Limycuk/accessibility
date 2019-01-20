import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router-dom';

import history from '~/services/history';

import { withStyles } from '@material-ui/core/styles';
import Article from '~/pages/Article';
import Form from '~/pages/Form';

import styles from './styles';
import Header from '../../Header';
import LeftBar from '../../LeftBar';

const Home = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;

const Content = ({ classes }) => {
  return (
    <Router history={history}>
      <div className={classes.root}>
        <Route
          children={(data) => {
            return <Header {...data} />;
          }}
        />
        <LeftBar />
        <div className={classes.content}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/article" component={Article} />
          <Route path="/form" component={Form} />
        </div>
      </div>
    </Router>
  );
};

Content.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Content);
