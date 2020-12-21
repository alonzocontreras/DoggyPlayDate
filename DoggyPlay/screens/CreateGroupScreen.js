import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Slider from "react-native-slider";
import Header from "../components/Header";
import { compose } from "recompose";
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput
} from "react-native-formik";
import { TextField } from "react-native-material-textfield";
import { Formik } from "formik";
import * as Yup from "yup";
import MenuToggle from "../components/MenuToggle";
import Button from "../components/Button";

const FormikInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(TextField);

const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  groupName: Yup.string("Enter a name for new group").required(
    "Name is required"
  ),
  memberLimit: Yup.string("Enter maximum number of members").required(
    "Must set member max"
  ),
  location: Yup.string("Enter a location address")
    .required("Must enter an address")
    .min(8, "Password must contain at least 8 characters")
    .required("Password is required")
});

export default class CreateGroupScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenLimit: 0
    };

    this.setLimit = this.setLimit.bind(this);
  }

  setLimit = value => {
    this.setState({ chosenLimit: value });
  };

  fields = [
    { id: 0, label: "Group Name", name: "groupName" },
    { id: 1, label: "Location", name: "location" },
    { id: 2, label: "Member Limit", name: "memberLimit" }
  ];

  render() {
    return (
      <>
        <MenuToggle navigation={this.props.navigation} />
        <Header title="Create Group" />
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
                  if (field.name === "memberLimit") {
                    return (
                      <View key={field.id} style={styles.sliderContainer}>
                        <Text style={styles.memberLimitText}>Member Limit</Text>
                        <View style={styles.memberLimitBox}>
                          <Text style={{ fontSize: 20 }}>
                            {this.state.chosenLimit}
                          </Text>
                        </View>
                        <Slider
                          value={this.state.chosenLimit}
                          onValueChange={value => this.setLimit(value)}
                          style={{ width: "90%", height: 40 }}
                          minimumValue={1}
                          maximumValue={30}
                          step={1}
                          minimumTrackTintColor="#632525"
                          maximumTrackTintColor="#632525"
                        />
                      </View>
                    );
                  } else {
                    return (
                      <FormikInput
                        label={field.label}
                        name={field.name}
                        key={field.name}
                      />
                    );
                  }
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
    flexDirection: "column",
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  memberLimitBox: {
    flex: 1,
    padding: 5,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#632525",
    alignItems: "center",
    justifyContent: "center"
  },
  sliderContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  memberLimitText: {
    color: "#632525",
    fontSize: 20,
    fontFamily: "purple-purse",
    padding: 5
  }
});
