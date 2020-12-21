import React from "react";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";
import HomeScreen from '../screens/HomeScreen';
import MapScreen from "../screens/MapScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import ReportAnIssueScreen from "../screens/ReportAnIssueScreen";
import MyPlacesScreen from "../screens/MyPlacesScreen";

const SlideNavi = createAnimatedSwitchNavigator(
  {
    Home: HomeScreen,
    Map: MapScreen,
    Profile: MyProfileScreen,
    "Report An Issue": ReportAnIssueScreen,
    "My Places": MyPlacesScreen
  },
  {
    // The previous screen will slide to the bottom while the next screen will fade in
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={800}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    )
  }
);

export default SlideNavi;