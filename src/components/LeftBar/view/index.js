import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "classnames";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const LeftBar = ({
  classes,
  onClose,
  isOpenedMenu,
  links,
  pathname,
  isDisabledAnimation,
  isEnableDeafMode,
  toggleDeafMode,
  toggleDisableAnimation
}) => {
  return (
    <Drawer anchor="left" open={isOpenedMenu} onClose={onClose}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <Button
            component={Link}
            to="/"
            className={classes.logo}
            onClick={onClose}
            aria-label="Logo"
          >
            Accessibility
          </Button>
        </div>
        <hr className={classes.hr} />
        <nav>
          <ul className={classes.list}>
            {links.map(item => {
              const className = classNames(classes.link, {
                [classes.activeLink]: pathname === item.link
              });

              return (
                <li key={item.link}>
                  <Button
                    component={Link}
                    to={item.link}
                    className={className}
                    onClick={onClose}
                  >
                    {item.title}
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={classes.settings}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isEnableDeafMode}
                onChange={toggleDeafMode}
                value="deaf"
                color="primary"
              />
            }
            label="Enable deaf mode"
            classes={{ root: classes.animationToggler }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={isDisabledAnimation}
                onChange={toggleDisableAnimation}
                value="animation"
                color="primary"
              />
            }
            label="Disable animation"
            classes={{ root: classes.animationToggler }}
          />
        </div>
      </div>
    </Drawer>
  );
};

LeftBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpenedMenu: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired,
  isDisabledAnimation: PropTypes.bool.isRequired,
  isEnableDeafMode: PropTypes.bool.isRequired,
  toggleDisableAnimation: PropTypes.func.isRequired,
  toggleDeafMode: PropTypes.func.isRequired
};

export default withStyles(styles)(LeftBar);
