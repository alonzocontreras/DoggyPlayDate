//form template
import React, { Component } from "react";
import { TextField } from "react-native-material-textfield";
import { compose } from "recompose";
import { View, TouchableOpacity, Button, StyleSheet } from "react-native";
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
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string("Choose a password")
    .min(8, "Password must contain at least 8 characters")
    .required("Password is required")
});

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = values => {
    this.props.navigation.navigate("Map");
  };

  render() {
    return (
      <Formik
        onSubmit={(values, { setSubmitting }) => this.handleSubmit(values)}
        validationSchema={validationSchema}
        initialValues={this.props.initialValues}
        render={props => (
          <Form style={{ width: "80%" }}>
            <FormikInput label="email" name="email" type="email" />
            <FormikInput label="password" name="password" secureTextEntry />
            <TouchableOpacity style={styles.button}>
              <Button onPress={props.handleSubmit} title="SUBMIT" />
            </TouchableOpacity>
          </Form>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    width: "100%"
  },
  button: {
    color: "#000",
    borderWidth: 1,
    borderColor: "#000"
  }
});
