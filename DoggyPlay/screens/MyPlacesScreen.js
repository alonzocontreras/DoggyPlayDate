import React, { Component } from "react";
import {
    ScrollView,
    StyleSheet,
    View,
    Dimensions,
    Text,
    Image
} from "react-native";
import Carousel from "react-native-snap-carousel";
import MenuToggle from "../components/MenuToggle";
import Header from "../components/Header";

export default class HomeScreen extends Component {
    screenWidth = Math.round(Dimensions.get("window").width);

    data = [
        {
            date: "08/23/19",
            park: "Duboce",

        },
        {
            date: "08/16/19",
            park: "Fort Funston",
        },
        {
            date: "08/15/19",
            park: "Alamo Square",
        },
        {
            date: "08/02/19",
            park: "Mission Creek",
        }
    ];

    _renderItem({ item, index }) {
        return (
            <View style={styles.slide}>
                <Image source={require("../assets/images/dog-fight.jpeg")} />
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
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.carousel}>
                        <Text style={{fontSize: 20}}>{this.data[0].date + " - " + " " + this.data[0].park}</Text>
                        <Image style={{width: 370, height: 200}} source={require("../assets/images/duboce.jpg")} />
                        <Text style={{fontSize: 20}}>{this.data[1].date + " - " + " " + this.data[1].park}</Text>
                        <Image style={{width: 370, height: 200}} source={require("../assets/images/fortFunston.jpg")} />
                        <Text style={{fontSize: 20}}>{this.data[2].date + " - " + " " + this.data[2].park}</Text>
                        <Image style={{width: 370, height: 200}} source={require("../assets/images/alamoSquare.jpg")} />
                        <Text style={{fontSize: 20}}>{this.data[3].date + " - " + " " + this.data[3].park}</Text>
                        <Image style={{width: 370, height: 200}} source={require("../assets/images/missionCreek.jpg")} />
                    </View>
                </ScrollView>
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
