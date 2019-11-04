//form template
import React, { Component } from "react";
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
  firstName: Yup.string("Enter first name").required("Name is required"),
  lastName: Yup.string("Enter first name").required("Name is required"),
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

const RegisterForm = props => (
    <Formik
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
        initialValues={props.initialValues}
        render={props => (
            <Form style={{ width: "80%"}}>
              <FormikInput label="First Name" name="firstName" />
              <FormikInput label="Last Name" name="lastName" />
              <FormikInput label="Email" name="email" type="email" />
              <FormikInput label="Password" name="password" secureTextEntry />
              <FormikInput label="Confirm Password" name="confirmPassword" secureTextEntry />
              <Switch label="I have read and agree to terms" name="termAgreement" />
              <Button onPress={props.handleSubmit} title="SUBMIT" />
            </Form>
        )}
    />
);

export default RegisterForm;
