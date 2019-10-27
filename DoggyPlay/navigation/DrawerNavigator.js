import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import HiddenLabel from "./HiddenLabel";
import MapScreen from "../screens/MapScreen";
import RegisterScreen from "../screens/RegisterScreen";
import CreateEventScreen from "../screens/CreateGroupScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import MyPlacesScreen from "../screens/MyPlacesScreen";
import MyEventsScreen from "../screens/MyEventsScreen";
import ReportAnIssueScreen from "../screens/ReportAnIssueScreen";
import FAQScreen from "../screens/FAQScreen";

const homeConfig = Platform.select({
  web: { headerMode: "screen" },
  default: {
    initialRouteName: "My Places"
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
    "My Profile": {
      screen: MyProfileScreen,
      navigationOptions: {
        header: null
      }
    },
    "My Places": {
      screen: MyPlacesScreen,
      navigationOptions: {
        header: null
      }
    },
    "My Events": {
      screen: MyEventsScreen,
      navigationOptions: {
        header: null
      }
    },
    "Create Event": {
      screen: CreateEventScreen,
      navigationOptions: {
        header: null
      }
    },
    "Report An Issue": {
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
