import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'

class Spacer extends Component {

  render() {
    return (
        <View style={{height:this.props.height}}/>
    );
  }
}

export default Spacer