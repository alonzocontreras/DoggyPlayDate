import React, {Component} from 'react'
import { View, Text, Image, Dimensions } from 'react-native'

class TabNavigatorButton extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <View style={styles.tabNavigatorButton}>
                <Text style={styles.buttonLabel}>{this.props.label}</Text>
            </View>
        )
    }
}

export default class BottomTabNavigator extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.bottomNavigationBar}>
                {this.props.labels.map((label)=>{
                    return <TabNavigatorButton key={label.id} label={label.label} />
                })}
            </View>
        )
    }
}

const styles = {
    tabNavigatorButton: {
        height: "100%",
        backgroundColor: "#632525",
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get('window').width/3,
        borderRightWidth: .5,
        borderColor: "#E3E3E3"
    },
    bottomNavigationBar: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "5%",
        position: "absolute",
        bottom: 0,
    },
    buttonLabel: {
        color: "#E3E3E3",
        fontSize: 20,
        textAlign: "center",
        fontFamily: 'purple-purse'
    }
}