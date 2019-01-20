import React, { Component } from 'react';

import View from './view';
import { FORM_NAME } from '../../constants';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data) {
    console.log('data == ', data);
  }

  render() {
    const props = {
      form: FORM_NAME,
      onSubmit: this.onSubmit
    };

    return <View {...props} />;
  }
}

export default FormContainer;
