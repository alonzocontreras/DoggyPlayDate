import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,

} from 'react-native';
import MenuToggle from "../components/MenuToggle";
import { Dropdown } from 'react-native-material-dropdown';
import Header from "../components/Header";

export default class ReportAnIssueScreen extends Component {



    data = [
        {
            value: "Lost/ Missing Dog",
        },
        {
            value: "Something Isn't Working",
        },
        {
            value: "General Feedback",
        },
        {
            value: "Other"
        }
    ];

    render() {
        return (
            <View style={{flex: 2}}>
                <MenuToggle navigation={this.props.navigation}/>
                <Header title="Report An Issue" />
                <Dropdown
                    label='Category'
                    data={this.data}
                />
                <TextInput
                    style={{top: 150, height: 40, borderColor: 'gray', borderWidth:2}}

                />
            </View>
        );
    }
}


