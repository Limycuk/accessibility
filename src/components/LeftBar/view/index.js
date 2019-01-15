import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const LeftBar = ({ classes, onClose, isOpenedMenu, links, pathname }) => {
  return (
    <Drawer anchor="left" open={isOpenedMenu} onClose={onClose}>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <Link to="/" className={classes.logo}>
            Accessibility
          </Link>
        </div>
        <hr className={classes.hr} />
        <nav>
          <ul className={classes.list}>
            {links.map((item) => {
              const className = classNames(classes.link, {
                [classes.activeLink]: pathname === item.link
              });

              return (
                <li key={item.link}>
                  <Button
                    component={Link}
                    to={item.link}
                    className={className}
                    onClick={onClose}>
                    {item.title}
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Drawer>
  );
};

LeftBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpenedMenu: PropTypes.bool.isRequired,
  links: PropTypes.array.isRequired
};

export default withStyles(styles)(LeftBar);
