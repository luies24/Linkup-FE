import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Components/Login'
import Feed from './Components/Feed'
import Details from './Components/Details'
import Create from './Components/Create'


const Stack = createStackNavigator()

export default function App2({ navigation }) {

  const [user, setUser] = useState({})
  const [alert, setAlert] = useState({})

  const login = (username, password) => {
    fetch('http://localhost3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setAlerts(data.errors)
        } else {
          AsyncStorage.setItem('token', data.token)
          setUser(data.user)
          setAlerts([])
        }
      })
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login'>
          {(props) => <Login
            login={login}
            {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )

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