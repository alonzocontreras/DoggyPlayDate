import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import SubButton from "../components/SubmitButton";
import Header from "../components/Header";
import { compose } from "recompose";
import {
  handleTextInput,
  withNextInputAutoFocusInput
} from "react-native-formik";
import { TextField } from "react-native-material-textfield";

const FormikInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);

export default class CreateEventScreen extends Component {
    constructor(props) {
      super(props);
    }

    fields = [
      { label: "Event Name", name: "" },
      { label: "", name: "" },
      { label: "", name: "" },
      { label: "", name: "" },
      { label: "", name: "" }
    ];

    render() {
      return (
        <>
          <ScrollView style={styles.container}>
            <Header title="Create Event" />
            {this.fields.map(field => {
              return (
                <FormikInput
                  label={field.label}
                  name={field.name}
                />
              );
            })}
            <SubButton />
          </ScrollView>
        </>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
