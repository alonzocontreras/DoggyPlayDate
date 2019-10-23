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
import MyProfileScreen from "../screens/MyProfileScreen";
import MyPlacesScreen from "../screens/MyPlacesScreen";
import MyEventsScreen from "../screens/MyEventsScreen";
import ReportAnIssueScreen from "../screens/ReportAnIssueScreen";
import FAQScreen from "../screens/FAQScreen";

const homeConfig = Platform.select({
  web: { headerMode: "screen" },
  default: {
    initialRouteName: "Login"
  }
});

const DrawerNavigator = createDrawerNavigator(
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
    },
    MyProfile: {
      screen: MyProfileScreen,
      navigationOptions: {
        header: null
      }
    },
    MyPlaces: {
      screen: MyPlacesScreen,
      navigationOptions: {
        header: null
      }
    },
    MyEvents: {
      screen: MyEventsScreen,
      navigationOptions: {
        header: null
      }
    },
    ReportAnIssue: {
      screen: ReportAnIssueScreen,
      navigationOptions: {
        header: null
      }
    },
    FAQ: {
      screen: FAQScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  homeConfig
);

export default DrawerNavigator;
