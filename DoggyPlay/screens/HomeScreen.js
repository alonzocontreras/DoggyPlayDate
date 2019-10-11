import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import MenuToggle from "../components/MenuToggle";



export default class HomeScreen extends Component  {
  constructor(props){
    super(props)
  }
  render() {
  return (
      <View style={styles.container}>
        <ScrollView
            contentContainerStyle={styles.container}>
          <Header title="Create Account"/>
          <LoginForm style={styles.formContainer}/>
          <MenuToggle navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    width: "100%"
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#F5FCFF"
  }
});
