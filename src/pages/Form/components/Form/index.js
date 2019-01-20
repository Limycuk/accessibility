import React, { Component } from "react";

import errorConverter from "~/services/errorConverter";

import View from "./view";
import { FORM_NAME, FORM_SCHEMA } from "../../constants";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowNotification: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.hideTimeout = this.hideTimeout.bind(this);
  }

  static validate(data) {
    return errorConverter(data, FORM_SCHEMA);
  }

  onSubmit(data) {
    this.setState(
      {
        isShowNotification: true
      },
      this.hideTimeout
    );
  }

  hideTimeout() {
    setTimeout(() => {
      this.setState({
        isShowNotification: false
      });
    }, 4000);
  }

  render() {
    const { isShowNotification } = this.state;

    const props = {
      form: FORM_NAME,
      onSubmit: this.onSubmit,
      validate: FormContainer.validate,
      isShowNotification
    };

    return <View {...props} />;
  }
}

export default FormContainer;
