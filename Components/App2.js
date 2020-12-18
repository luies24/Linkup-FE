import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login'
import Feed from './Components/Feed'
import Details from './Components/Details'
import Create from './Components/Create'


const Stack = createStackNavigator()

export default function App2({ navigation }) {

    const [user, setUser] = useState({})
    const [alert, setAlert] = useState({})



}