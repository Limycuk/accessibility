import React from "react";
import PropTypes from "prop-types";
import DocumentTitle from "react-document-title";
import { compose } from "redux";
import { reduxForm, Field } from "redux-form";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import {
  InputField,
  SelectField,
  MultipleSelectField,
  RadioGroupField,
  SwitchField,
  CheckboxField
} from "~/packages/form";

import {
  STATUS_OPTIONS,
  BANKS_OPTIONS,
  GENDER_OPTIONS
} from "../../../constants";
import styles from "./styles";
import ResultSnackbar from "./Snackbar";

const Form = ({ classes, handleSubmit, isShowNotification }) => {
  return (
    <DocumentTitle title="Form - Accessibility">
      <main>
        <ResultSnackbar isOpen={isShowNotification} />
        <h1>Form</h1>
        <form
          className={classes.form}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
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
            name="banks"
            component={MultipleSelectField}
            className={classes.halfRow}
            label="Banks"
            options={BANKS_OPTIONS}
          />
          <Field
            name="gender"
            component={RadioGroupField}
            className={classes.row}
            label="Gender"
            options={GENDER_OPTIONS}
          />
          <Field
            name="favorite"
            component={SwitchField}
            className={classes.row}
            label="Favorite"
          />
          <Field
            name="approved"
            component={CheckboxField}
            className={classes.row}
            label="Approved"
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </main>
    </DocumentTitle>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  isShowNotification: PropTypes.bool.isRequired
};

export default compose(
  withStyles(styles),
  reduxForm()
)(Form);
