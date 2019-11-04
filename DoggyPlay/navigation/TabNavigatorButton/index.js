import React, { Component } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { withNavigation, NavigationActions } from "react-navigation";

class TabNavigatorButton extends Component {
  constructor(props) {
    super(props);
  }

  createGroup = NavigationActions.navigate({
    routeName: "CreateGroupScreen",
    action: NavigationActions.navigate({ routeName: "Create Group" })
  });
 myEvents = NavigationActions.navigate({
    routeName: "MyEventsScreen",
    action: NavigationActions.navigate({ routeName: "My Events" })
  });

  createEvent = NavigationActions.navigate({
      routeName: "CreateEventScreen",
      action: NavigationActions.navigate({ routeName: "Create Event" })
    });

  handlePress = action => {
    switch (action) {
      case "Create Group":
        return this.props.navigation.dispatch(this.createGroup);
      case "Events":
        return this.props.navigation.dispatch(this.createEvent);
      case "Create Event":
        return this.props.navigation.dispatch(this.myEvents);
      default:
        return;
    }
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.tabNavigatorButton}
        onPress={() => this.handlePress(this.props.label)}
      >
        <Text style={styles.buttonLabel}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(TabNavigatorButton);

const styles = {
  tabNavigatorButton: {
    height: "100%",
    backgroundColor: "#632525",
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width / 3,
    borderRightWidth: 0.5,
    borderColor: "#E3E3E3"
  },
  buttonLabel: {
    color: "#E3E3E3",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "purple-purse"
  }
};
