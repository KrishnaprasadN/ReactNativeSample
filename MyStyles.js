import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

class MyStyle extends Component {

    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text style={styles.one}> First name is {this.props.first}</Text>
                <Text style={styles.two}>Last name is {this.props.last}</Text>
                <Text style={styles.three}>Count is {this.props.count}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        justifyContent: 'center',
        alignItems: 'stretch'
        
    },
    one: {
        backgroundColor: "red"
    },

    two: {

        backgroundColor: "blue"
    },

    three: {

        backgroundColor: "green"
    }

})




export default MyStyle