import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SplashScreen extends React.Component {
  render() {
    const viewStyles = [
      styles.container,
      { backgroundColor: 'orange' }
    ];
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
      justifyContent: 'center'
    };

    return (
      <View style={viewStyles}>
        <Text style={textStyles}>
          Splash Screen
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f098',
    margin: 10
  },
  listItems: {
    flex: 1,
    color: '#bc2b78',
    fontWeight: 'bold',
    fontSize: 15,
    justifyContent: 'center',
    backgroundColor: '#33ECFF',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 30
  },
  homeTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    color: '#FF3333'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200
  }
});
