import React, {Component} from 'react';
import {
	Stylesheet, 
	View} from 'react-native';
import MapView from 'react-native-maps';

export default class MainScreen extends Component{
	render(){
		return(
			<MapView style={{flex: 1}} />
		)
	}
}




