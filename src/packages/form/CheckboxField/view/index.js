import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const CheckboxField = ({
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
        <FormControlLabel
          control={
            <Checkbox checked={value} onChange={onChange} value={name} />
          }
          label={label}
        />
      </FormControl>
      {submitFailed && error && <span className={classes.error}>{error}</span>}
    </Fragment>
  );
};

CheckboxField.propTypes = {
  isDisabled: PropTypes.bool,
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired
  }).isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
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

CheckboxField.defaultProps = {
  label: null,
  helperText: null,
  isFullWidth: true,
  type: "text",
  isDisabled: false
};

export default withStyles(styles)(CheckboxField);
