import React, {Component} from 'react';
import MenuToggle from "../components/MenuToggle";
import Header from "../components/Header";
import { View } from "react-native";

export default class SettingsScreen extends Component {
  render() {
    return(
        <View style={{ flex: 1 }}>
          <MenuToggle navigation={this.props.navigation}/>
          <Header title="Settings" />
        </View>
    );
  }
}