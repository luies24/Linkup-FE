// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login'
import Feed from './Components/Feed'
import Details from './Components/Details'
import Create from './Components/Create'

const Tab = createBottomTabNavigator()
const FeedStack = createStackNavigator()
const CreateStack = createStackNavigator()
const Stack = createStackNavigator()
const DetailStack = createStackNavigator()

const FeedStackScreen = () => {
    return (
        <FeedStack.Navigator >
            <FeedStack.Screen name='Feed' component={Feed} />
        </FeedStack.Navigator>
    )
}

const DetailStackScreen = () => {
    return (
        <DetailStack.Navigator>
            <DetailStack.Screen name='Details' component={Details} />
        </DetailStack.Navigator>
    )
}

const CreateStackScreen = () => {
    return (
        <CreateStack.Navigator >
            <CreateStack.Screen name='Create' component={Create} />
        </CreateStack.Navigator>
    )
}

class App extends Component {

    // componentDidMount() {
    //   fetch('http://localhost:3000/activities')
    //     .then(response => response.json())
    //     .then(activities => this.setState({ activities }))
    // }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen name="Login">{() => (
                        < Tab.Navigator tabBarOptions={{ labelStyle: styles.labelStyle }}>
                            <Tab.Screen name="Login" component={Login} />
                            <Tab.Screen name="Sign Up" component={Create} />
                        </ Tab.Navigator>
                    )}</Stack.Screen>
                    <Stack.Screen
                        name="Feed"
                        options={{ title: 'Activities', headerLeft: null }}
                    >{() => (
                        < Tab.Navigator tabBarOptions={{ labelStyle: styles.labelStyle }}>
                            <Tab.Screen name="Feed" component={FeedStackScreen} />
                            <Tab.Screen name="Create" component={CreateStackScreen} />
                        </ Tab.Navigator>
                    )}</Stack.Screen>
                    <Stack.Screen
                        name="Details"
                        options={{ title: 'Details' }}
                    >{() => (
                        < Tab.Navigator tabBarOptions={{ labelStyle: styles.labelStyle }}>
                            <Tab.Screen name="Feed" component={DetailStackScreen} />
                            <Tab.Screen name="Create" component={CreateStackScreen} />
                        </ Tab.Navigator>
                    )}</Stack.Screen>
                    <Stack.Screen
                        name="Create"
                        options={{ title: 'Create' }}
                    >{() => (
                        < Tab.Navigator tabBarOptions={{ labelStyle: styles.labelStyle }}>
                            <Tab.Screen name="Feed" component={FeedStackScreen} />
                            <Tab.Screen name="Create" component={CreateStackScreen} />
                        </ Tab.Navigator>
                    )}</Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffbf3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelStyle: {
        fontSize: 15,
        fontWeight: "700"

    },
});

export default App