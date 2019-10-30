import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList
} from 'react-native';
import MenuToggle from "../components/MenuToggle";
import Header from "../components/Header";

export default class MyEventsScreen extends Component {

//define data
data = [
    {
        date: "08/12/19",
        event_name:"Dogs Days of Summer Party",
        location: "Berkeley, CA",
        image_url: require("../assets/images/dogDaysOfSummer.png"),
    },
    {
        date: "09/07/19",
        event_name: "Strut Your Mutt",
        location: "San Francisco, CA",
        image_url: require("../assets/images/struttYourMutt.jpg"),
    },
    {
        date:"09/18/19",
        event_name: "Bring Your Own Dog",
        location: "Oakland, CA",
        image_url: require("../assets/images/byod.jpg"),
    },
    {
        date: "10/31/19",
        event_name: "Yappy Hour",
        location: "San Jose, CA",
        image_url: require("../assets/images/yappyHour.jpg"),
    }
];

    _renderItem({item, index}) {
    return(
        <View>
            <Text style={{fontSize: 20}}>{item.date + " - " + " " + item.event_name + " - " + " " + item.location}</Text>
            <Image style={{width: 370, height: 200}} source= {item.image_url} />
        </View>
    );
}

    render() {
        return (
            <View style={styles.container}>
                <MenuToggle navigation={this.props.navigation} />
                <Header title="My Places" />
                <View style={{ flex: 1 }}><FlatList
                    data={this.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                /></View>
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