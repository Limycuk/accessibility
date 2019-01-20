import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const RadioGroupField = ({
  classes,
  input: { value, onChange, name },
  meta: { error, submitFailed },
  label,
  helperText,
  isFullWidth,
  type,
  className,
  isDisabled,
  options
}) => {
  return (
    <Fragment>
      <FormControl
        component="fieldset"
        className={classNames(classes.container, className)}
        disabled={isDisabled}
      >
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup
          name={name}
          className={classes.group}
          value={value}
          onChange={onChange}
        >
          {options.map(option => {
            return (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      {submitFailed && error && <span className={classes.error}>{error}</span>}
    </Fragment>
  );
};

RadioGroupField.propTypes = {
  isDisabled: PropTypes.bool,
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired
  }).isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    submitFailed: PropTypes.bool.isRequired
  }).isRequired,
  label: PropTypes.string,
  helperText: PropTypes.string,
  isFullWidth: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string
};

RadioGroupField.defaultProps = {
  label: null,
  helperText: null,
  isFullWidth: true,
  type: "text",
  isDisabled: false
};

export default withStyles(styles)(RadioGroupField);
