import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { StyleSheet, Text, View, Button, Alert, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { red } from 'ansi-colors';


class List extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data.jsonData.movies}
          renderItem={
            ({ item }) => <Text style={styles.listItems}>{item.title}</Text>
          }
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}


export default class App extends Component {

  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#03A9F4"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };

  constructor(props) {
    super(props)

    this.state = {

      jsonData: {
        "title": "The Basics - Networking",
        "description": "Your app fetched this from a remote endpoint!",
        "movies": [
          { "id": "1", "title": "Star Wars", "releaseYear": "1977" },
          { "id": "2", "title": "Back to the Future", "releaseYear": "1985" },
          { "id": "3", "title": "12345", "releaseYear": "1982" },
        ]
      },
      isLoading: false
    };
  }

  SampleFunction2(StringHolder) {
    this.setState({
      isLoading: true
    }
    );
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          jsonData: responseJson,
          isLoading: false
        }
        );
      })
      .catch((error) => {
        console.error(error);
      });

  }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 200 }}>
          <ActivityIndicator
            color='#bc2b78'
            size="large"
            style={styles.activityIndicator} />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f098' }}>
          <View >
            <Text>API and Listing data</Text>
          </View>
        </SafeAreaView>
        < List data={this.state} />
        <View style={{ margin: 10 }}>
          <Button onPress={this.SampleFunction2.bind(this, "Function With Argument Text")} title=" Get Movies list " />
        </View>
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
