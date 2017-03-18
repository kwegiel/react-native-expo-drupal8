import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
    render() { 
        return ( <View style = { styles.container }>
            <Text style = { styles.hello } > 
                TEST 
            </Text> 
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    hello: {
        color: '#666',
        fontSize: 20,
    },
});

Expo.registerRootComponent(App);