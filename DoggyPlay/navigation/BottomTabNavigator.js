import React, { Component } from "react";
import { View } from "react-native";
import TabNavigatorButton from './TabNavigatorButton'

export default class BottomTabNavigator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.bottomNavigationBar}>
        {this.props.labels.map(label => {
          return (
              <TabNavigatorButton
                label={label.label}
                key={label.id}
              />
          );
        })}
      </View>
    );
  }
}

const styles = {
  bottomNavigationBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "7%",
    position: "absolute",
    bottom: 0
  },
};
