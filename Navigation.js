import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import AsyncStorage from '@react-native-community/async-storage';
import PushNotification from 'react-native-push-notification'

class HomeScreen extends Component {
    storeData = async () => {
        try {
            await AsyncStorage.setItem('item', 'Krishna')
            console.log("Data is stored ")
        } catch (e) {
            // saving error
        }
    }

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('item')
            // if (value !== null) {
            //     // value previously stored
            // }
            console.log("my data is: ")
            console.log(value);
        } catch (e) {
            // error reading value
        }
    }

    showNotification() {
        PushNotification.localNotification({
            id: '0', // (optional) Valid unique 32 bit integer specified as string. default: Autogenerated Unique ID
            ticker: "My Notification Ticker", // (optional)
            autoCancel: true, // (optional) default: true
            largeIcon: "ic_launcher", // (optional) default: "ic_launcher"
            smallIcon: "ic_notification", // (optional) default: "ic_notification" with fallback for "ic_launcher"
            bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
            subText: "This is a subText", // (optional) default: none
            color: "red", // (optional) default: system default
            vibrate: true, // (optional) default: true
            vibration: 300, // vibration length in milliseconds, ignored if vibrate=false, default: 1000
            tag: 'some_tag', // (optional) add tag to message
            group: "group", // (optional) add group to message
            ongoing: false, // (optional) set whether this is an "ongoing" notification
            priority: "high", // (optional) set notification priority, default: high
            visibility: "private", // (optional) set notification visibility, default: private
            importance: "high", // (optional) set notification importance, default: high

            /* iOS and Android properties */
            title: "My Notification Title", // (optional)
            message: "My Notification Message", // (required)
            playSound: true, // (optional) default: true
            soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
            number: '10', // (optional) Valid 32 bit integer specified as string. default: none (Cannot be zero)
            repeatType: 'day', // (optional) Repeating interval. Check 'Repeating Notifications' section for more info.
            actions: '["Yes", "No"]',  // (Android only) See the doc for notification actions to know more
        });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>Home Screen</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.push(
                        'Profile',
                        {
                            itemId: 86,
                            otherParam: 'Passing the data from Home screen',
                        })}
                />

                <Button
                    title="Store Data"
                    onPress={() => this.storeData()}
                />

                <Button
                    title="Show Notification"
                    onPress={() => this.showNotification()}
                />
            </View>
        );
    }
}

class ProfileScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { navigation } = this.props;
        console.log(JSON.stringify(navigation))
        //console.log(JSON.stringify(navigation.getParam('itemId', 'NO-ID')))
        //console.log(JSON.stringify(navigation.getParam('otherParam', 'None')))

        return (
            <View style={style.container}>
                <Text style={style.text}>Profile Screen</Text>
                <Button
                    title="Go to Right"
                    onPress={() => this.props.navigation.navigate('Right')}
                />
            </View>
        );
    }
}

class Right extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>Third Screen</Text>
            </View>
        );
    }
}

class Splash extends Component {
    componentDidMount() {
        setTimeout(
            () => { this.props.navigation.replace('Home') },
            3000)
    }
    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}>Splash Screen</Text>
            </View>
        );
    }
}

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                title: `Home`,
                headerBackTitle: `A`,
                //headerRight: <Right title={"Right"}></Right>,
                //headerLeft: <Right title={"Left"}></Right>
            })
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: () => ({
                title: `Profile`
            })
        },
        Right: {
            screen: Right,
            navigationOptions: () => ({
                title: `Right`
            })
        },
    },
    {
        tabBarOptions: {
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            labelStyle: {
                fontSize: 20,
            },

        },
    }
);

const Navigation = createAppContainer(MainNavigator);

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },

        text: {
            margin: 20,
            fontSize: 20
        }
    }
)


export default Navigation


