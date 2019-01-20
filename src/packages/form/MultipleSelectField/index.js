import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "./view";

class MultipleSelectField extends Component {
  render() {
    const {
      input: { value, onChange, name },
      meta: { error, submitFailed },
      label,
      isFullWidth,
      className,
      isDisabled,
      options
    } = this.props;

    const props = {
      label,
      isFullWidth,
      className,
      isDisabled,
      options,
      value: value || [],
      onChange,
      name,
      error,
      submitFailed
    };

    return <View {...props} />;
  }
}

MultipleSelectField.propTypes = {
  isDisabled: PropTypes.bool,
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

export default MultipleSelectField;
