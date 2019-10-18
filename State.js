import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class State extends Component {

    // TODO: 
    // directly modify the state value and demo
    // 2 button - increase and decrease add decrease count method


    constructor(props) {
        super(props)
    }

    state = {
        count: 2
    }

    updateCount(params) {
       // console.log("Before - " + this.state);
        this.setState({ count: this.state.count + 1 }, () => console.log("Variable is updated"));
        console.log("After - " + this.state);
    }

    render() {
        console.log(this.props);
        return (
            <View>
                <Text>First name is {this.props.first}</Text>
                <Text>Last name is {this.props.last}</Text>
                <Text>Count is {this.state.count}</Text>
                <Button
                    onPress={() => this.updateCount()}
                    title="Press Me"
                />
            </View>
        );
    }
}

export default State