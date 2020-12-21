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
    height: "10%",
    justifyContent: "flex-end",
    alignItems: "center",
    // padding: 20
  },
  title: {
    fontSize: 32,
    fontFamily: 'purple-purse',
    width: "80%",
    color: "#632525",
    textAlign: "center"
  }
});

export default Header;
