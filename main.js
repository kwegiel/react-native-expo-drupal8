import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';

import FetchApi from './components/FetchApi';
import DetailView from './components/DetailView';

class App extends React.Component {
    renderScene(route, navigator) {
        switch (route.id) {
            case 'nodelist':
                return (<FetchApi navigator={navigator} title="nodelist" />)
            case 'nodedetails':
                return (<DetailView node={route.nid} navigator={navigator} title="nodedetails" />)
        }
    }
    render() {
        return (
            <Navigator
                initialRoute={{ id: 'nodelist' }}
                renderScene={this.renderScene}
                configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
            />
        );
    }
}

Expo.registerRootComponent(App);