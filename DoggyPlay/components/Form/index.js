//form template
import React from "react";
import { TextField } from "react-native-material-textfield";
import { compose } from "recompose";
import { View, Text, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput
} from "react-native-formik";
import * as Yup from "yup";
import Switch from "./../Switch";

const FormikInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);

const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Choose a password")
    .min(8, "Password must contain at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string("Enter your password")
    .required("Confirm your password")
    .oneOf([Yup.ref("password")], "Password does not match")
});

const FormikForm = props => (
  <Formik
    onSubmit={values => alert(JSON.stringify(values, null, 2))}
    validationSchema={validationSchema}
    initialValues={props.initialValues}
    render={props => (
      <Form>
        <FormikInput label="First Name" name="firstName" />
        <FormikInput label="Last Name" name="lastName" />
        <FormikInput label="email" name="email" type="email" />
        <FormikInput label="password" name="password" />
        <FormikInput label="confirm password" name="confirmPassword" />
        <Switch label="I have read and agree to terms" name="termAgreement" />
        <Button onPress={props.handleSubmit} title="SUBMIT" />
        <Text style={{ fontSize: 20 }}>{JSON.stringify(props, null, 2)}</Text>
      </Form>
    )}
  />
);

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    width: "100%"
  }
});

export default FormikForm;
