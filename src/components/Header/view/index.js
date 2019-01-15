import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const Header = ({ classes, toggleMenu }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" aria-label="Menu" onClick={toggleMenu}>
          <Icon>menu</Icon>
        </IconButton>
        <Typography variant="h6" color="inherit">
          <Link to="/" className={classes.logo}>
            Accessibility
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  toggleMenu: PropTypes.func.isRequired
};

export default withStyles(styles)(Header);
