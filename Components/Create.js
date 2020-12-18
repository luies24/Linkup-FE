import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function Create({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.pushImg}
                resizeMode="contain"
                source={require('../assets/push.png')}
            />
            <Image
                style={styles.yourImg}
                resizeMode="contain"
                source={require('../assets/yourself.png')}
            />
            <Text style={styles.label}>Activity:</Text>
            <TextInput
                style={[styles.input, { borderColor: "#51cacc" }]}
            />
            <Text style={styles.label}>Date:</Text>
            <TextInput
                style={[styles.input, { borderColor: "#9df871" }]}
            />
            <Text style={styles.label}>Time:</Text>
            <TextInput
                style={[styles.input, { borderColor: "#de9dd6" }]}
            />
            <Text style={styles.label}>Meetup Location:</Text>
            <TextInput
                style={[styles.input, { borderColor: "#ff708e" }]}
            />
            <Button
                title="Submit"
                onPress={() => navigation.navigate('Feed')}
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
    label: {
        fontWeight: "500",
    },
    input: {
        width: 300,
        height: 50,
        borderColor: '#B5B4BC',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8
    },
    pushImg: {
        height: 60,
        width: 200,
        marginBottom: null,
        marginTop: 50,
        padding: null,
    },
    yourImg: {
        height: 200,
        width: 300,
        marginTop: null,
        padding: null,
    },
});