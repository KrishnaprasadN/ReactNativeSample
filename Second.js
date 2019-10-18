import React, { Component } from 'react'
import { View, Text, Image, TextInput, Button, Picker, Switch, 
  ActivityIndicator, Alert, ToastAndroid } from 'react-native'
import StateComponent from './StateComponent';
import Spacer from './Spacer'

class Second extends Component {

  constructor(props) {
    super(props)
    //console.log(this.props);
    //console.log(this.props.name);
    //console.log(this.props.last);
    this.state = { language: 'java', switchValue: true }
  }

  componentDidMount() {
    console.log("componentDidMount in Second");
    var state = { name: "Krishna", last: "Prasad" }
    console.log(state);
  }

  componentDidUpdate() {
    console.log("Component did update in Second");
  }

  handleButtonClick = () => {
    // Alert.alert(
    //   'Title',
    //   'This is my first alert',
    //   [
    //     //{text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    //     {
    //       text: 'Cancel',
    //       onPress: () => console.log('Cancel Pressed'),
    //       style: 'cancel',
    //     },
    //     {text: 'OK', onPress: () => console.log('OK Pressed')},
    //   ],
    //   {cancelable: false},
    // );

    ToastAndroid.show('Toast is displayed !', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View>
        <Text disabled={true}>Fist name is: {this.props.name}</Text>

        <Spacer height={10}> </Spacer>

        <Text onPress={() => console.log('last name')}>Last name is: {this.props.last}</Text>

        <Spacer height={10}> </Spacer>

        <Text>Count is: {this.props.count}</Text>

        <Spacer height={10}> </Spacer>

        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: 'https://cdn.theatlantic.com/assets/media/img/mt/2017/10/Pict1_Ursinia_calendulifolia/lead_720_405.jpg?mod=1533691909' }}
        />

        <Spacer height={10}> </Spacer>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => console.log(text)}
        />
        <Spacer height={10}> </Spacer>

        <Button
          title="Press me"
          onPress={this.handleButtonClick}
        />

        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Kotlin" value="k" />
          <Picker.Item label="Swift" value="s" />
        </Picker>
        <Spacer height={10}> </Spacer>
        <Switch
          value={this.state.switchValue}
          onValueChange={(switchValue) => this.setState({ switchValue })} />
        
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="large" color="#337758" animating={true}/>

      </View>
    );
  }
}


export default Second