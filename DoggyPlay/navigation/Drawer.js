import React, { Component } from "react";
import { createDrawerNavigator } from 'react-navigation-drawer';
import HomeScreen from "../screens/HomeScreen";

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
});

export default MyDrawerNavigator;
