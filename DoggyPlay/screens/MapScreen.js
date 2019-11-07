import React, { Component } from "react";
import { Stylesheet, View } from "react-native";
import MapView from "react-native-maps";
import MenuToggle from "../components/MenuToggle";

export default class MapScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: -6.270565,
            longitude: 106.75955,
            latitudeDelta: 1,
            longitudeDelta: 1,
            coords: [],
            showsUserLocation: true,
            error: null
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                    showsUserLocation: true
                });
            },
            error =>
                this.setState({
                    error: error.message
                }),
            { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
        );
    }

  render() {
    return (
      <>
        <MenuToggle navigation={this.props.navigation} />
        <MapView style={{ flex: 1 }} showsUserLocation={this.state.showsUserLocation} />
      </>
    );
  }
}
