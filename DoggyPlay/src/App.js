import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import InputForm from "./components/InputForm";
import Header from "./components/Header";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Create Account" />
        <InputForm style={styles.formContainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: "100%"
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F5FCFF"
  },
});
