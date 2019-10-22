import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import CreateScreen from "../screens/CreateScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MapScreen from "../screens/MapScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {},
});

const homeConfig = Platform.select({
  web: { headerMode: "screen" },
  default: {},
    initialRouteName: "Map"
});

const MainStackNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      header: null
    }
  }
});

const HomeStack = createStackNavigator(
  {
    Map: {
      screen: MapScreen,
      navigationOptions: {
        header: null
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

HomeStack.navigationOptions = ({ navigation }) => ({
  tabBarLabel: "Home",
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
});

const CreateStack = createStackNavigator(
  {
    Create: CreateScreen
  },
  config
);

CreateStack.navigationOptions = {
  tabBarLabel: "Create",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CreateStack,
  SettingsStack
});

module.exports = { TabNavigator, MainStackNavigator };
