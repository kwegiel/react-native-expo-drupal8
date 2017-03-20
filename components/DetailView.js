import React, {Component} from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';

export default class DetailView extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            body: this.props.body
        }
    }

    onPress(){
        this.props.navigator.push({
            id:'nodelist'
        });
    }

    render(){
        return(
        <View>
            <Text>{this.state.title}</Text>
            <Text>{this.state.body}</Text>
            <Button 
                onPress={this.onPress.bind(this)}
                title="Go Back"
            />
        </View>
        );
    }
}

AppRegistry.registerComponent('DetailView', () => DetailView);
