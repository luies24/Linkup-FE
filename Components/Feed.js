import React, { Component, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native';
import PostDetails from './Details'

export default function Feed({ navigation }) {


    return (
        <ScrollView style={styles.container}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Details')}>
                <View style={[styles.card, { borderBottomColor: '#51cacc' }]}>
                    <Text style={[styles.text, { fontWeight: "700" }]}>Run</Text>
                    <Text style={styles.text}>Luis Garcia</Text>
                    <Text style={[styles.text, { fontWeight: "500" }]}>10 PM</Text>
                    <Text style={styles.text}>Lincoln Park</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Details')}>
                <View style={[styles.card, { borderBottomColor: '#de9dd6' }]}>
                    <Text style={[styles.text, { fontWeight: "700" }]}>Sprints</Text>
                    <Text style={styles.text}>Johnny Appleseed</Text>
                    <Text style={[styles.text, { fontWeight: "500" }]}>10 AM</Text>
                    <Text style={styles.text}>High School Track</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Details')}>
                <View style={[styles.card, { borderBottomColor: '#ff708e' }]}>
                    <Text style={[styles.text, { fontWeight: "700" }]}>Walk</Text>
                    <Text style={styles.text}>Emery Garcia</Text>
                    <Text style={[styles.text, { fontWeight: "500" }]}>7 PM</Text>
                    <Text style={styles.text}>Yanney Park</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Details')}>
                <View style={[styles.card, { borderBottomColor: '#51cacc' }]}>
                    <Text style={[styles.text, { fontWeight: "700" }]}>Biking</Text>
                    <Text style={styles.text}>Kristine Du</Text>
                    <Text style={[styles.text, { fontWeight: "500" }]}>3 PM</Text>
                    <Text style={styles.text}>Bike Trail</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Details')}>
                <View style={[styles.card, { borderBottomColor: '#de9dd6' }]}>
                    <Text style={[styles.text, { fontWeight: "700" }]}>Deadlift</Text>
                    <Text style={styles.text}>Ahmed Gaber</Text>
                    <Text style={[styles.text, { fontWeight: "500" }]}>12 PM</Text>
                    <Text style={styles.text}>YMCA</Text>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Details')}>
                <View style={[styles.card, { borderBottomColor: '#ff708e' }]}>
                    <Text style={[styles.text, { fontWeight: "700" }]}>Distance Run</Text>
                    <Text style={styles.text}>Tim Apple</Text>
                    <Text style={[styles.text, { fontWeight: "500" }]}>7 PM</Text>
                    <Text style={styles.text}>Country Roads</Text>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffbf3',
    },
    card: {
        flex: 1,
        borderBottomWidth: .7,
        width: 350,
        borderRadius: 5,
        borderBottomColor: '#51cacc',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        marginLeft: 30,
    },
    text: {
        fontSize: 30,
        color: '#51cacc',
    }
});