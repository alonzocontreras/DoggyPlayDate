import React, { Component } from "react";
import { StyleSheet, Text, Button, TouchableOpacity, View } from "react-native";

export default class SubButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button}>
        <View>
          <Text style={{ color: "#000", fontSize: 20 }}>SUBMIT</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    width: "100%",
    height: 40,
    borderWidth: 1.5,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  }
});
