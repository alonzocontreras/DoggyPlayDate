import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import React, { useState } from "react";
import { useScreens } from "react-native-screens";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

const chalk = require('chalk');

import AppNavigator from "./navigation/AppNavigator";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  useScreens();
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  try {
    await Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png"),
        require("./assets/images/dog-fight.jpeg"),
        require("./assets/images/cute-dog.gif"),
        require("./assets/images/crime-fighters.jpeg"),
        require("./assets/images/playingdogs.gif"),
        require("./assets/images/dogbonebutton.png"),
        require("./assets/images/dogbonebutton2.png"),
        require("./assets/images/stranger-dogs.jpeg")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free to
        // remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'purple-purse': require('./assets/fonts/PurplePurse-Regular.ttf')
      }),
    ]);
  } catch (e) {
    console.error("No fonts found");
  } finally {
    console.log("moving on")
  }
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
