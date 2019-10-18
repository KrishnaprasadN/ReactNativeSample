import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class StateComponent extends Component {

  constructor(props) {
    super(props)

    this.state = { inccount: 0, deccount: 0, count: 0 }
  }

  increaseCount() {
    this.setState({ inccount: this.state.inccount + 1 },
      () => console.log("updated"));
  }

  deacreaseCount() {
    this.setState({ deccount: this.state.deccount - 1 });
  }

  handleClick = () => {
    console.log("Button is clicked")
    this.increaseCount();
  }

  render() {
    return (
      <View>
        <Text>Count is: {this.state.inccount}</Text>
        <Text>Count is: {this.state.deccount}</Text>
        <Button
          title="Increase Count"
          onPress={this.handleClick} />

        <Button
          title="Decrease Count"
          onPress={() =>
            this.deacreaseCount()
          } />

      </View>
    );
  }
}

export default StateComponent