import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const InputField = ({
  classes,
  input: { value, onChange, name },
  meta: { error, submitFailed },
  label,
  isFullWidth,
  type,
  className,
  isDisabled
}) => {
  return (
    <TextField
      label={label}
      name={name}
      disabled={isDisabled}
      className={classNames(classes.container, className)}
      value={value}
      onChange={onChange}
      margin="normal"
      helperText={submitFailed && error ? error : ""}
      fullWidth={isFullWidth}
      type={type}
      FormHelperTextProps={{
        classes: {
          root: classes.helperText
        }
      }}
      inputProps={{
        "aria-label": `Field ${name}`,
        "aria-autocomplete": false,
        "aria-disabled": false,
        "aria-required": true
      }}
    />
  );
};

InputField.propTypes = {
  isDisabled: PropTypes.bool,
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    helperText: PropTypes.string.isRequired
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
  isFullWidth: PropTypes.bool,
  type: PropTypes.string,
  className: PropTypes.string
};

InputField.defaultProps = {
  label: null,
  isFullWidth: true,
  type: "text",
  isDisabled: false
};

export default withStyles(styles)(InputField);
