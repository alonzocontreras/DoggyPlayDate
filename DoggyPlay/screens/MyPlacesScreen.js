import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Dimensions,
  Text,
  Image,
  FlatList
} from "react-native";
import Carousel from "react-native-snap-carousel";
import MenuToggle from "../components/MenuToggle";
import Header from "../components/Header";

export default class MyPlacesScreen extends Component {
  screenWidth = Math.round(Dimensions.get("window").width);

  data = [
    {
      date: "08/23/19",
      park: "Duboce",
      image_url: require("../assets/images/duboce.jpg")
    },
    {
      date: "08/16/19",
      park: "Fort Funston",
      image_url: require("../assets/images/fortFunston.jpg")
    },
    {
      date: "08/15/19",
      park: "Alamo Square",
      image_url: require("../assets/images/alamoSquare.jpg")
    },
    {
      date: "08/02/19",
      park: "Mission Creek",
      image_url: require("../assets/images/missionCreek.jpg")
    }
  ];

  _renderItem({ item, index }) {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>
          {item.date + " - " + " " + item.park}
        </Text>
        <Image style={{ width: 370, height: 200 }} source={item.image_url} />
      </View>
    );
  }

  /**
   * Note: All images and data are hardcoded for now.  Need to figure out how to render dynamic images
   * @returns {*}
   */
  render() {
    return (
      <View style={styles.container}>
        <MenuToggle navigation={this.props.navigation} />
        <Header title="My Places" />
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.data}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: "100%"
  },
  carousel: {
    flex: 1,
    width: "80%"
  }
});
