import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Dimensions, Text } from "react-native";
import Carousel from "react-native-snap-carousel";
import MenuToggle from "../components/MenuToggle";
import Header from "../components/Header";

export default class HomeScreen extends Component {
  screenWidth = Math.round(Dimensions.get("window").width);

  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>

      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuToggle navigation={this.props.navigation} />
        <Header title="News" />
        <ScrollView contentContainerStyle={styles.container}>
          <Carousel
            data={data}
            renderItem={this._renderItem}
            autoplay={true}
            enableSnap={true}
            loop={true}
            sliderWidth={this.screenWidth}
            itemWidth={(this.screenWidth * 9) / 10}
          />
        </ScrollView>
      </View>
    );
  }
}

const data = [
  {
    title: "Who let the dogs out?!",
    author: 'Alonzo "The Truth" Contreras',
    image_url: "",
    article: "For real bro, who let the damn dogs out again? Look at those things! Those are fucking wolves, dude!! Like what the hell are they even doing out here? This is crazy man, like I’ma be at home making my own street tacos and hear some motherfucking wolves fighting outside in the Sunset? Brooooo, hell to the no. You know what..."
  },
  {
    title: "",
    author: "",
    image_url: "",
    article: ""
  },
  {
    title: "",
    author: "",
    image_url: "",
    article: ""
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: "100%"
  }
});
