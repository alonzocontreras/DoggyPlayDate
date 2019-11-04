import React, { Component } from "react";
import { Form, FormikInput } from "../components/FormikInput";
import { Formik } from "formik";
import { View, Text, Button, StyleSheet } from "react-native";
import * as Yup from "yup";
import _ from "lodash";
import Header from "../components/Header";

const validationSchema = Yup.object().shape({
  email: Yup.string("Enter email address to send invite to.").email(
    "Enter a valid email address"
  )
});

let fields = [];
_.times(5, index => {
  fields.push(
    <FormikInput
      label="Enter email address to send invite to."
      name="email"
      type="email"
      key={index}
    />
  );
});

export default class InviteScreen extends Component {
  render() {
    return (
      <>
        <Header title="Add Invites" />
        <View style={styles.formContainer}>
          <Formik
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
            initialValues={this.props.initialValues}
            render={props => (
              <Form style={{ width: "80%" }}>
                {fields}
                <Button onPress={props.handleSubmit} title="SEND" />
              </Form>
            )}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  formContainer: {
      height: "70%",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
  }
});
