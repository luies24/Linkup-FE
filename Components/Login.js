import React, { Component, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import Feed from './Feed'

const Tab = createBottomTabNavigator();

export default function Login({ login, navigation }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        let user = {
            username,
            password
        }
    }

    return (
        <View style={styles.container} >
            <Image
                style={styles.img}
                resizeMode="contain"
                source={require('../assets/linkup.png')}
            />
            <Text>Username</Text>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
            />
            <Text>Password</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
            />
            <Button
                title="Login"
                onPress={() => navigation.navigate('Feed'), handleSubmit}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fffbf3',
    },
    input: {
        width: 300,
        height: 50,
        borderColor: '#B5B4BC',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8
    },
    img: {
        height: 250,
        width: 250,
    }

});