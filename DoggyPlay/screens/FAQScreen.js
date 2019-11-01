import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native';
import MenuToggle from "../components/MenuToggle";
import Header from "../components/Header";
import BottomTabNavigator from "../navigation/BottomTabNavigator";
import { SearchBar } from 'react-native-elements';
import {TextField} from "@material-ui/core";

export default class FAQScreen extends Component {

    constructor(props) {
        super(props);
    }
    screenWidth = Dimensions.get("window").width;

    //implement search bar
    state = {
      search: '',
    };

    updateSearch = search =>  {
        this.setState({ search });
    };

    //implement bottom nav bar
    tabNaviButtonLabels = [
        { id: 0, label: "Create Group", icon: "", action: "createGroup" },
        { id: 1, label: "Events", icon: "", action: "goToEvents" },
        { id: 2, label: "Create Event", icon: "", action: "createEvent" }
    ];


    render() {
        const {search} = this.state;
        return (
            <View style={{ flex: 1 }}>
                <MenuToggle navigation={this.props.navigation}/>
                <Header title="FAQ" />
                <SearchBar
                   placeHolder="Search"
                   onChangeText={this.updateSearch}
                   value={search}
                   lightTheme={true}
                />
                <Text style = {{fontSize: 20, textAlign: 'center', top: 40}}> Common Questions: </Text>
                <BottomTabNavigator
                    navigation={this.props.navigation}
                    labels={this.tabNaviButtonLabels}
                />
            </View>
        );
    }
}