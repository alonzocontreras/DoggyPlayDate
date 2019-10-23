import React, { Component } from "react";
import { Stylesheet, View } from "react-native";
import MapView from "react-native-maps";
import MenuToggle from "../components/MenuToggle";

export default class MainScreen extends Component {
  render() {
    return (
      <>
        <MenuToggle navigation={this.props.navigation} />
        <MapView style={{ flex: 1 }} />
      </>
    );
  }
}
