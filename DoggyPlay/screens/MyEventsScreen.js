import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import MenuToggle from "../components/MenuToggle";

export default class MyEventsScreen extends Component {
    render() {
        return (
            <View>
                <MenuToggle navigation={this.props.navigation}/>
            </View>
        );
    }
}