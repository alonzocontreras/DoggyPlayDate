import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import InputForm from "./src/components/Form";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <InputForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
