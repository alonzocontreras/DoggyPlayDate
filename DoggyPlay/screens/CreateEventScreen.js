import React, { Component } from "react";
import { DatePickerIOS, ScrollView, StyleSheet, View } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";
import { compose } from "recompose";
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput
} from "react-native-formik";
import { TextField } from "react-native-material-textfield";
import * as Yup from "yup";
import { Formik } from "formik";
import MenuToggle from "../components/MenuToggle";

const FormikInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);

const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  eventName: Yup.string("Enter a name for new event").required(
    "Name is required"
  ),
  eventLocation: Yup.string("Enter location of event").required(
    "Must provide a location"
  )
});

export default class CreateEventScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenDate: new Date()
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate = newDate => {
    this.setState({ chosenDate: newDate });
  };

  fields = [
    { label: "Event Name", name: "eventName" },
    { label: "Address", name: "eventAddress" },
    { label: "Date", name: "eventDate" }
  ];

  render() {
    return (
      <>
        <MenuToggle navigation={this.props.navigation} />
        <Header title="Create Event" />
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <Formik
            onSubmit={values => alert(JSON.stringify(values, null, 2))}
            validationSchema={validationSchema}
            initialValues={this.props.initialValues}
            render={props => (
              <Form style={{ width: "80%" }}>
                {this.fields.map(field => {
                  if (field.name === "eventDate") { return <DatePickerIOS date={this.state.chosenDate} onDateChange={this.setDate} key={field.label}/> }
                  else { return <FormikInput label={field.label} name={field.name} key={field.label} /> }
                })}
              </Form>
            )}
          />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around"
            }}
          >
            <Button title="Cancel" />
            <Button title="Submit" />
          </View>
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
