import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import MenuToggle from "../components/MenuToggle";
import RegisterForm from "../components/RegisterForm";

export default function RegisterScreen (){
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                <MenuToggle navigation={this.props.navigation}/>
                <Header title="Register" />
                <RegisterForm style={styles.formContainer} />
            </ScrollView>
        </View>
    );
}

RegisterScreen.navigationOptions = {
    header: null
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
