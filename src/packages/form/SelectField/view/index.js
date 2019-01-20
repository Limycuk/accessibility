import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const multipleChange = (on, value) => {

}

const SelectField = ({
  classes,
  input: { value, onChange, name },
  meta: { error, submitFailed },
  label,
  isFullWidth,
  className,
  isDisabled,
  options,
  isMultiple
}) => {
  return (
    <FormControl
      className={classNames(classes.container, className)}
      fullWidth={isFullWidth}
      disabled={isDisabled}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        multiple={isMultiple}
        value={value || isMultiple ? [] : ''}
        onChange={isMultiple ? onChange : (value) => {

        })}
        renderValue={(selected) =>
          Array.isArray(selected) ? selected.join(', ') : selected
        }
        inputProps={{
          name,
          id: name
        }}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((item) => {
          return (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
      {submitFailed && error && <span className={classes.error}>{error}</span>}
    </FormControl>
  );
};

SelectField.propTypes = {
  isDisabled: PropTypes.bool,
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired
  }).isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.array
    ]).isRequired,
    onChange: PropTypes.func.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.string,
    submitFailed: PropTypes.bool.isRequired
  }).isRequired,
  label: PropTypes.string,
  isFullWidth: PropTypes.bool,
  className: PropTypes.string,
  options: PropTypes.array
};

SelectField.defaultProps = {
  label: null,
  isFullWidth: true,
  isDisabled: false,
  isMultiple: false,
  options: []
};

export default withStyles(styles)(SelectField);
