import React, {Component} from "react";
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from "../screens/HomeScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import MyEventsScreen from "../screens/MyEventsScreen";
import MyPlacesScreen from "../screens/MyPlacesScreen";
import ReportAnIssueScreen from "../screens/ReportAnIssueScreen";
import FAQScreen from "../screens/FAQScreen";

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeScreen,
    },
    MyProfile: {
        screen: MyProfileScreen
    },
    MyPlaces: {
        screen: MyPlacesScreen
    },
    MyEvents: {
        screen: MyEventsScreen
    },
    ReportAnIssue: {
        screen: ReportAnIssueScreen
    },
    FAQ: {
        screen: FAQScreen
    }
});

export default MyDrawerNavigator;
