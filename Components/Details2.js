import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function Details2() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tim Apple</Text>
            <Text style={styles.text}>Distance Run</Text>
            <Text style={styles.text}>November 13, 2020</Text>
            <Text style={styles.text}>7 PM</Text>
            <Text style={styles.text}>Country Roads</Text>
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