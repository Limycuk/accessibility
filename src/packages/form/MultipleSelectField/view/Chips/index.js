import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

import styles from "./styles";

class Chips extends PureComponent {
  render() {
    const { classes, selected, options } = this.props;

    return (
      <div className={classes.chips}>
        {selected.map(value => {
          const option = options.find(option => option.value === value);
          return (
            <Chip
              key={option.value}
              label={option.label}
              className={classes.chip}
            />
          );
        })}
      </div>
    );
  }
}

Chips.propTypes = {
  selected: PropTypes.array.isRequired
};

export default withStyles(styles)(Chips);
