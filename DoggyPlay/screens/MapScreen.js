import React, { Component } from "react";
import { Stylesheet, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import MenuToggle from "../components/MenuToggle";
import BottomTabNavigator from "../navigation/BottomTabNavigator";

const screenHeight = Dimensions.get("window").height;

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.01;

const initialRegion = {
  latitude: -6.270565,
  longitude: 106.75955,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
};

export default class MapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: -6.270565,
        longitude: 106.75955,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      },
      ready: true,
      filteredMarkers: []
    };
  }

  map = null;

  getCurrentPosition() {
    try {
      navigator.geolocation.getCurrentPosition(
        position => {
          const region = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
            showsUserLocation: true
          };
        },
        error => alert("Are location services on?"),
        { enableHighAccuracy: true, timeout: 200000, maximumAge: 1000 }
      );
    } catch (e) {
      alert(e.message || "Oh em haaaay, das messed up, girl.");
    }
  }

  onMapReady = e => {
    if (!this.state.ready) {
      this.setState({ ready: true });
    }
  };

  componentDidMount() {
    console.log("Component hath mounted");
    this.getCurrentPosition();
  }

  render() {
    const { region } = this.state;
    const { children, renderMarker, markers } = this.props;

    return (
      <>
        <MenuToggle navigation={this.props.navigation} />
        <MapView
          style={{ flex: 1, marginBottom: screenHeight*.07 }}
          ref={map => {
            this.map = map;
          }}
          data={markers}
          initialRegion={initialRegion}
          renderMarker={renderMarker}
          onMapReady={this.onMapReady}
          showsMyLocationButton={true}
          showsUserLocation
          provider="google"
        >
          {/*{ markers.map(renderMarker) }*/}
          {/*{(children && children) || null}*/}
        </MapView>
        <BottomTabNavigator navigation={this.props.navigation} />
      </>
    );
  }
}
