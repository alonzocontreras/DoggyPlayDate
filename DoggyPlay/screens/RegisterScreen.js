import React, { Component } from "react";
import { ScrollView, StyleSheet, View, ImageBackground } from "react-native";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

export default class RegisterScreen extends Component {
  render() {
    return (
      <ImageBackground source={require("../assets/images/cute-dog.gif")}
                       style={styles.imageBackground}>
        <View style={styles.overlay}>
          <Header title="Register" />
          <ScrollView contentContainerStyle={styles.container}>
            <RegisterForm navigation={this.props.navigation} />
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: "100%"
  },
    imageBackground: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        // opacity: 0.7,
        zIndex: -2
    },
    overlay: {
        width: "100%",
        height: "100%",
        zIndex: 0,
        backgroundColor: "white",
        opacity: 0.7
    }
});
