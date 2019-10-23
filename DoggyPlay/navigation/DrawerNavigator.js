import React, { Component } from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import HiddenLabel from "./HiddenLabel";
import MapScreen from "../screens/MapScreen";
import RegisterScreen from "../screens/RegisterScreen";
import CreateScreen from "../screens/CreateScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabBarIcon from "../components/TabBarIcon";
import { Platform } from "react-native";

const homeConfig = Platform.select({
  web: { headerMode: "screen" },
  default: {
      initialRouteName: "Login"
  },
});

const MyDrawerNavigator = createDrawerNavigator(
  {
      Login: {
          screen: LoginScreen,
          navigationOptions: {
              drawerLabel: <HiddenLabel />,
              header: null
          }
      },
    Map: {
      screen: MapScreen,
      navigationOptions: {
        // drawerLabel: <HiddenLabel />,
        header: null
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        // drawerLabel: <HiddenLabel />
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  homeConfig
);

export default MyDrawerNavigator;
