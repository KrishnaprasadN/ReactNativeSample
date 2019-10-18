import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import axios from 'axios';

class Yoga extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { "id": "0", "title": "Test", "releaseYear": "2019" }
            ]
        }
    }

    async componentDidMount() {
        console.log("componentDidMount");
        var res = await this.getMovies();
        this.setState({data: res});
    }

    render() {
        return (
            <View style={style.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item, index, separators }) => (
                        <Text style={style.item}>{item.title}</Text>
                    )}
                />
            </View>
        );
    }

    async getMovies() {
        // return fetch('https://facebook.github.io/react-native/movies.json')
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         return responseJson.movies;
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
        return axios.get('https://facebook.github.io/react-native/movies.json')
        .then(responseJson => {
            console.log(JSON.stringify(responseJson));
            return responseJson.data.movies;
        })
        .catch(error => {
          console.log(error);
        });
    }
}

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'baseline',
            padding: 10
        },
        one: {
            height: 50,
            width: 50,
            backgroundColor: 'red'
        },
        two: {
            height: 50,
            width: 50,
            backgroundColor: 'green'
        },
        three: {
            height: 50,
            width: 50,
            backgroundColor: 'blue'
        },
        item: {
            height: 50
        },
    }
);


export default Yoga