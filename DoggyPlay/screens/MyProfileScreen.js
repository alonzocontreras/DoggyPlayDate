import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import MenuToggle from "../components/MenuToggle";
//static image as placeholder for dynamic pics later

const petPic = require('../assets/images/cooper.jpg');
const ownerPic = require('../assets/images/ownerPic.jpg');

const styles = StyleSheet.create({

    ownerInfo: {
        fontSize: 20,
        textAlign: 'center',
        top: 40
    },

    ownerPic: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 35,
        bottom: 200,
        left: 80,
        right: 0,
        width: 200,
        height: 200,
        borderRadius: 100
    },
    profile: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
        top: 40
    },
    petInfo: {
        fontSize: 20,
        textAlign: 'center',
        top: 65
    },
    petPic: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 65,
        bottom: 0,
        left: 80,
        right: 0,
        width: 200,
        height: 200,
        borderRadius: 100
    },

});

export default class MyProfileScreen extends Component {
    render() {
        return (
            <View>
                <Text style ={styles.profile}>My Profile</Text>
                <Image style={styles.ownerPic} source={ownerPic}/>
                <Text style={styles.ownerInfo}>Alvin Nguyen</Text>
                <Text style={styles.ownerInfo}>San Francisco, CA</Text>
                <Image style={styles.petPic} source={petPic}/>
                <Text style={styles.petInfo}>Cooper</Text>
                <Text style={styles.petInfo}>Rat Terrier</Text>
                <Text style={styles.petInfo}>3 years old</Text>
                <MenuToggle navigation={this.props.navigation}/>
            </View>
        );
    }
}