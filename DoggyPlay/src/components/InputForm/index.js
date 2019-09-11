import React, { Component } from "react";
import FormikForm from "../Form";
import { ScrollView, StyleSheet } from "react-native";

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        agreeToTerms: false
      }
    };
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        // bounces="false"
      >
        <FormikForm initialValues={this.state.initialValues} style={styles.container}/>
      </ScrollView>
    );
    // return null
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
    width: "100%",
    // height: "100%"
  },
  contentContainer: {
    flex: 1,
  },
  fillContainer: {
    flex: 1
  },
})

export default InputForm;
