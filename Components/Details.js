import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Details() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Johnny Appleseed</Text>
            <Text style={styles.text}>Sprints</Text>
            <Text style={styles.text}>November 13, 2020</Text>
            <Text style={styles.text}>10 AM</Text>
            <Text style={styles.text}>High School Track</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffbf3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 40,
        color: '#ff708e',
    }
});