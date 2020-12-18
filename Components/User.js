import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function User() {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            {/* <TextInput 
                
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});