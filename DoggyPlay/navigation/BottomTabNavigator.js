import React, { Component } from "react";
import { View } from "react-native";
import TabNavigatorButton from "./TabNavigatorButton";
import { withNavigation } from "react-navigation";

class BottomTabNavigator extends Component {
  constructor(props) {
    super(props);
  }

  tabNaviButtonLabels = [
    { id: 0, label: "Create Group", icon: "", action: "createGroup" },
    { id: 1, label: "Events", icon: "", action: "goToEvents" },
    { id: 2, label: "Create Event", icon: "", action: "createEvent" }
  ];

  render() {
    return (
      <View style={styles.bottomNavigationBar}>
        {this.tabNaviButtonLabels.map(label => {
          return (
            <TabNavigatorButton
              navigation={this.props.navigation}
              label={label.label}
              key={label.id}
            />
          );
        })}
      </View>
    );
  }
}

export default withNavigation(BottomTabNavigator);

const styles = {
  bottomNavigationBar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "7%",
    position: "absolute",
    bottom: 0
  }
};
