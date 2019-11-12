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
  constructor(props) {
    super(props);
  }
  screenWidth = Dimensions.get("window").width;

  data = [
    {
      id: 0,
      title: "Who let the dogs out?!",
      briefDescription:
        'Crazy-looking stray dogs found wandering the streets of San Francisco, CA and disturbing the "peace".',
      state: "CALIFORNIA",
      author: 'Alonzo "The Truth" Contreras',
      image_url: require("../assets/images/dog-fight.jpeg"),
      article:
        "For real bro, who let the damn dogs out again? Look at those things! Those are fucking wolves, dude!! Like what the hell are they even doing out here? This is crazy man, like I’ma be at home making my own street tacos and hear some motherfucking wolves fighting outside in the Sunset? Brooooo, hell to the no. You know what..."
    },
    {
      id: 1,
      title: '"Stranger Things" enthusiasts breeding out real "Demi-dogs"?',
      briefDescription: "",
      state: "OHIO",
      author: 'Alvin "Cliff Hanger" Nguyen',
      image_url: require("../assets/images/stranger-dogs.jpeg"),
      article:
        "I don't even know what to say about this. Stranger Things ends its last season and people start bringing these to our dog shows just to get wrecked. We tryna bring in dollars and people done forgot about these dollarmations."
    },
    {
      id: 2,
      title: "Dog hoses down fire station, saving dozens of lives.",
      briefDescription: "",
      state: "NORTH CAROLINA",
      author: 'Hashim "The Dream" Jacobs',
      image_url: require("../assets/images/crime-fighters.jpeg"),
      article:
        "Less than 24 hours ago, a doggy wog sprayed an entire fire station down after it caught on fire while fire fighters were sound asleep inside. The heroic pooch repeatedly rang the bell after ramming a pipe, causing it to burst and release enough water to propel the truck through the door and into a hydrant, which extinguished the blazing flames that would have soon engulfed his owners. Doggy wog > Fire fighters."
    }
  ];

  tabNaviButtonLabels = [
    { id: 0, label: "Create Group", icon: "", action: "createGroup" },
    { id: 1, label: "Events", icon: "", action: "goToEvents" },
    { id: 2, label: "Create Event", icon: "", action: "createEvent" }
  ];

  _renderItem({ item }) {
    return (
      <ScrollView contentContainerStyle={styles.indexContainer}>
        <View style={styles.articleHeader}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <Text style={styles.briefDescription}>{item.briefDescription}</Text>
        <View style={styles.imageContainer}>
          <Image style={styles.imageView} source={item.image_url} />
        </View>
        <Text style={styles.author}>By {item.author}</Text>
        <View style={styles.articleContainer}>
          <Text style={styles.article}>
            {item.state} - {item.article}
          </Text>
        </View>
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <MenuToggle navigation={this.props.navigation} />
        <Header title="Doggy News" />
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.data}
            renderItem={this._renderItem}
            keyExtractor={item => item.id.toString()}
            horizontal={true}
            pagingEnabled
            decelerationRate={"fast"}
            snapToInterval={this.screenWidth}
            snapToAlignment={"start"}
          />
        </View>
        <BottomTabNavigator
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container2: {
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  indexContainer: {
    alignItems: "center",
    width: Dimensions.get("window").width,
    top: -50
    // justifyContent: "space-between"
  },
  imageView: {
    width: "98%",
    height: "98%",
    borderRadius: 0
  },
  imageContainer: {
    backgroundColor: "#632525",
    width: "80%",
    height: Dimensions.get("window").width * 0.8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    marginTop: 20
    // top: -100
  },
  title: {
    fontSize: 34,
    fontWeight: "500",
    fontStyle: "italic",
    fontFamily: "Times New Roman",
    color: "#000",
    marginTop: 30,
    textAlign: "center"
  },
  briefDescription: {
    width: "80%",
    fontSize: 18,
    fontWeight: "400"
  },
  author: {
    fontWeight: "800",
    fontSize: 14,
    marginTop: 20
  },
  articleHeader: {
    marginTop: 40
  },
  articleContainer: {
    width: "90%"
  },
  article: {
    fontSize: 16,
    lineHeight: 25,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 20
  }
});
