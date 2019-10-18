import React, {Component} from 'react'
import {View, Text} from 'react-native'

import State from './State'

class Test extends Component {
    render() {
        return (
            <View>
                <Text>Hello World</Text>
                <State first="Krishna" last="Prasad"/>
            </View>
        );
    }
}

export default Test