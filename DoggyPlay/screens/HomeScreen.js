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
import BottomTabNavigator from "../navigation/BottomTabNavigator";

export default class HomeScreen extends Component {
  screenWidth = Math.round(Dimensions.get("window").width);

  data = [
    {
      id: 0,
      title: "Who let the dogs out?!",
      author: 'Alonzo "The Truth" Contreras',
      image_url: "../assets/images/dog-fight.jpeg",
      article:
        "For real bro, who let the damn dogs out again? Look at those things! Those are fucking wolves, dude!! Like what the hell are they even doing out here? This is crazy man, like I’ma be at home making my own street tacos and hear some motherfucking wolves fighting outside in the Sunset? Brooooo, hell to the no. You know what..."
    },
    {
      id: 1,
      title: "Stranger things breeding out real Demi-dogs?",
      author: 'Alvin "Cliff Hanger" Nguyen',
      image_url: "../assets/images/stranger-dogs.jpeg",
      article:
        "I don't even know what to say about this. Stranger Things ends its last season and people start bringing these to our dog shows just to get wrecked. We tryna bring in dollars and people done forgot about these dollarmations."
    },
    {
      id: 2,
      title: "Dog hoses down fire station!",
      author: 'Hashim "The Dream" Jacobs',
      image_url: "../assets/images/crime-fighters.gif",
      article:
        "Less than 24 hours ago, a doggy wog sprayed an entire fire station down after it caught on fire while fire fighters were sound asleep inside. The heroic dog repeatedly rung the bell after causing a pipe to burst, releasing enough water to propel the truck into a hydrant, which extinguished the blazing flames that would have soon engulfed his owners. Doggy wog > Fire fighters."
    }
  ];

  tabNaviButtonLabels = [
    { id: 0, label: "Create Group", icon: "" },
    { id: 1, label: "Events", icon: "" },
    { id: 2, label: "Create Event", icon: "" }
  ];

  _renderItem({ item, index }) {
    return (
      <View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image_url }} />
        </View>
        <View style={styles.articleHeader}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.author}>{item.author}</Text>
        </View>
        <View style={styles.articleContainer}>
          <Text style={styles.article}>{item.article}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuToggle navigation={this.props.navigation} />
        <Header title="News" />
        <ScrollView contentContainerStyle={styles.container}>
          <FlatList
            data={this.data}
            renderItem={this._renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
          />
        </ScrollView>
        <BottomTabNavigator labels={this.tabNaviButtonLabels} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: Dimensions.get("window").width
  },
  imageView: {
  },
  imageContainer: {

  },
  articleHeader: {
  },
  articleContainer: {

  },
  article: {

  }
});
