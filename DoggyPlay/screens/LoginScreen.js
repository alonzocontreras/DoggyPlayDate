import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  View,
  Dimensions
} from "react-native";
import ImageOverlay from "react-native-image-overlay";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: false
  };

  height = Dimensions.get("window").height;

  render() {

    return (
      <ImageOverlay
        source={require("../assets/images/playingdogs.gif")}
        overlayAlpha={0.3}
        height={this.height}
        contentPosition="center"
      >
        <Header title="Doggy PlayDate" />
        <ScrollView contentContainerStyle={styles.container}>
          <LoginForm navigation={this.props.navigation} />
        </ScrollView>
      </ImageOverlay>
    );
  }
}

LoginScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    width: "100%",
    zIndex: 2
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F5FCFF"
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
    opacity: 0.5
  }
});
