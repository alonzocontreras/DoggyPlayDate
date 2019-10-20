import React, { Component } from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import Hidden from "./Hidden";

const MyDrawerNavigator = createDrawerNavigator({
    Login: {
      screen: LoginScreen,
      navigationOptions: {
          drawerLabel: <Hidden />
      }
    },
    Home: {
        screen: HomeScreen,
    },
});

export default MyDrawerNavigator;
