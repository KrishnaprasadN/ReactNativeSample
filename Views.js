import React, { Component } from 'react'
import { View, Text, Button, Image, TextInput, Picker, Switch, ToastAndroid, ViewPagerAndroid, 
  ActivityIndicator, Alert } from 'react-native'
import Spacer from './Spacer'

// passing integer in a {}
// if one key is updated, all other keys are retained, its actually merging only the provided key-value pair
// overriding key values in an object

class Views extends Component {

  constructor(props) {
    super(props)

    this.state = { inccount: 0, deccount: 0, switchValue: true,  inccount: 25, inccount: 128}
  }

  inc = () => {
    console.log("From inc - Button is clicked")
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);

    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    )
  }

  render() {
    return (
      <View>
        <Text>Count is: {this.state.inccount}</Text>

        <Spacer height={10} />

        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: 'https://cdn.theatlantic.com/assets/media/img/mt/2017/10/Pict1_Ursinia_calendulifolia/lead_720_405.jpg?mod=1533691909' }} />

        <Spacer height={10} />

        <Button
          title="Increase Count"
          onPress={this.inc} />

        {/*<TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => console.log(text)}
        />*/}

        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 100 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ language: itemValue })
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

        <Switch
          value={this.state.switchValue}
          onValueChange={(switchValue) => this.setState({ switchValue })} />

        {/* <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}>
          <View style={styles.pageStyle} key="1">
            <Text>First page</Text>
          </View>
          <View style={styles.pageStyle} key="2">
            <Text>Second page</Text>
          </View>
        </ViewPagerAndroid> */}

        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />

      </View>
    );
  }
}

const styles = {
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }
}

export default Views