import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Header from "../components/Header";
import Drawer from "../components/Drawer";

export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <ScrollView
            contentContainerStyle={styles.container}>
          <Header title="Create Account"/>
          <Drawer style={styles.formContainer}/>
        </ScrollView>
      </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: "100%"
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F5FCFF"
  }
});
