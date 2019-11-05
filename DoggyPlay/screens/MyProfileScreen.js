import React, { Component } from "react";
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Image
} from "react-native";
import MenuToggle from "../components/MenuToggle";
import Header from "../components/Header";

export default class MyProfileScreen extends Component {

    data = [
        {
            image_url: "../assets/images/ownerPic.jpg",
            name: "Alvin Nguyen",
            location: "San Francisco",
            dog: "Cooper",
            age: "3 years old",
            breed: "Rat Terrier"
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

    _renderItem({ item, index }) {
        return (
            <View style={styles.slide}>
                <Image source={require("../assets/images/dog-fight.jpeg")} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <MenuToggle navigation={this.props.navigation} />
                <Header title="My Profile" />
                        <Image style={{width: 200, height: 200, borderRadius: 100,}} source={require("../assets/images/ownerPic.jpg")} />
                        <Text style={{fontSize: 15, alignItems: 'center'}}>{this.data[0].name}</Text>
                        <Text style={{fontSize: 15}}>{this.data[0].location}</Text>
                        <Image style={{width: 200, height: 200, borderRadius: 100, top: 30}} source={require("../assets/images/cooper.jpg")} />
                        <Text style={{fontSize: 15, top: 40}}>{this.data[0].dog}</Text>
                        <Text style={{fontSize: 15, top: 40}}>{this.data[0].age}</Text>
                        <Text style={{fontSize: 15, top: 40}}>{this.data[0].breed}</Text>
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
        width: "80%",
        alignItems: 'center'
    }
});
