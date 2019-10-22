import React, { Component } from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import Hidden from "./Hidden";
import MapScreen from "../screens/MapScreen";
import RegisterScreen from "../screens/RegisterScreen";

const MyDrawerNavigator = createDrawerNavigator({
    Login: {
      screen: LoginScreen,
      navigationOptions: {
          drawerLabel: <Hidden />,
          header: null
      }
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: {
            drawerLabel: <Hidden />
        }
    },
    Map: {
        screen: MapScreen,
        navigationOptions: {
            drawerLabel: <Hidden />,
            header: null
        }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null
        }
    }
});

export default MyDrawerNavigator;
