import React, { Component } from "react";

import errorConverter from "~/services/errorConverter";

import View from "./view";
import { FORM_NAME, FORM_SCHEMA } from "../../constants";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  static validate(data) {
    return errorConverter(data, FORM_SCHEMA);
  }

  onSubmit(data) {
    console.log("data == ", data);
  }

  render() {
    const props = {
      form: FORM_NAME,
      onSubmit: this.onSubmit,
      validate: FormContainer.validate
    };

    return <View {...props} />;
  }
}

export default FormContainer;
