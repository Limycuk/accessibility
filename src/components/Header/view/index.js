import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const Header = ({
  classes,
  toggleMenu,
  hasLink,
  title,
  isReadableMode,
  toggleReadableMode
}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="Drawer Menu includes navigation"
          onClick={toggleMenu}
        >
          <Icon>menu</Icon>
        </IconButton>
        <Typography variant="h6" color="inherit">
          <Link to="/" className={classes.logo} aria-label="Logo">
            Accessibility
          </Link>
          {hasLink && <span className={classes.title}>{title}</span>}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          aria-hidden="true"
          className={classes.button}
          onClick={toggleReadableMode}
        >
          {isReadableMode ? "Default version" : "Version of visually impaired"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  hasLink: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  isReadableMode: PropTypes.bool.isRequired,
  toggleReadableMode: PropTypes.func.isRequired
};

export default compose(
  withStyles(styles),
  withRouter
)(Header);
