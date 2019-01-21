import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";
import Chips from "./Chips";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class SelectField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    };

    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onOpen() {
    this.setState({
      isOpened: true
    });
  }

  onClose() {
    this.setState({
      isOpened: false
    });
  }

  render() {
    const {
      classes,
      label,
      isFullWidth,
      className,
      isDisabled,
      options,
      value,
      onChange,
      name,
      error,
      submitFailed
    } = this.props;
    const { isOpened } = this.state;
    return (
      <FormControl
        className={classNames(classes.container, className)}
        fullWidth={isFullWidth}
        disabled={isDisabled}
      >
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Select
          role="listbox"
          multiple
          value={value}
          onChange={onChange}
          onOpen={this.onOpen}
          onClose={this.onClose}
          renderValue={selected => (
            <Chips selected={selected} options={options} />
          )}
          MenuProps={MenuProps}
          inputProps={{
            name,
            id: name,
            "aria-label": `Field ${name}`,
            "aria-autocomplete": false,
            "aria-disabled": false,
            "aria-required": false,
            "aria-multiselectable": true,
            "aria-expanded ": isOpened
          }}
          classes={{
            select: classes.select
          }}
        >
          {options.map(item => {
            const checked = value.includes(item.value);

            return (
              <MenuItem key={item.value} value={item.value} tabIndex={2}>
                <Checkbox checked={checked} />
                <ListItemText primary={item.label} />
              </MenuItem>
            );
          })}
        </Select>
        {submitFailed && error && (
          <span className={classes.error}>{error}</span>
        )}
      </FormControl>
    );
  }
}

SelectField.propTypes = {
  isDisabled: PropTypes.bool,
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired
  }).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  submitFailed: PropTypes.bool.isRequired,
  label: PropTypes.string,
  isFullWidth: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.array
};

SelectField.defaultProps = {
  label: null,
  isFullWidth: true,
  isDisabled: false,
  options: []
};

export default withStyles(styles)(SelectField);
