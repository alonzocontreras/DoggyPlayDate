import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet, SafeAreaView } from "react-native";
import { withNavigation } from "react-navigation";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  handlePress = (route) => {

  }

  render() {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={()=> this.handlePress(this.props.route)} style={styles.button}>
          <View>
            <Text style={styles.text}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default withNavigation(Button);

const styles = StyleSheet.create({
  button: {
    marginTop: 5,
    width: "33%",
    height: 40,
    borderWidth: 0.5,
      borderRadius: 5,
    borderColor: "#632525",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontFamily: "purple-purse",
    fontWeight: "bold",
      color: "#632525",
  }
});
