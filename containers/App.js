import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from '../store';

import ListingView from '../components/ListingView';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ListingView />
            </Provider>
        );
    }
}