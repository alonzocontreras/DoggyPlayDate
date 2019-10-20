import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { TabNavigator, MainStackNavigator } from './MainTabNavigator';
import DrawerNavigator from  './Drawer';


export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainStackNavigator,
      Tabs: TabNavigator,
      Drawer: DrawerNavigator
  })
);
