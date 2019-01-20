import React from 'react';
import DocumentTitle from 'react-document-title';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';

import { InputField, SelectField } from '~/packages/form';

import { STATUS_OPTIONS } from '../../../constants';
import styles from './styles';

const Form = ({ classes }) => {
  return (
    <DocumentTitle title="Form - Accessibility">
      <main>
        <h1>Form</h1>
        <form className={classes.form} noValidate autoComplete="off">
          <Field
            name="name"
            component={InputField}
            className={classes.halfRow}
            label="Name"
          />
          <Field
            name="password"
            type="password"
            component={InputField}
            className={classes.halfRow}
            label="Password"
          />
          <Field
            name="status"
            component={SelectField}
            className={classes.halfRow}
            label="Status"
            options={STATUS_OPTIONS}
          />
          <Field
            isMultiple
            name="achievments"
            component={SelectField}
            className={classes.halfRow}
            label="Achievments"
            options={STATUS_OPTIONS}
          />
        </form>
      </main>
    </DocumentTitle>
  );
};

export default compose(
  withStyles(styles),
  reduxForm()
)(Form);
