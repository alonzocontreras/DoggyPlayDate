import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 48,
    fontFamily: 'purple-purse',
    width: "80%",
    color: "#632525",
    textAlign: "center"
  }
});

export default Header;
