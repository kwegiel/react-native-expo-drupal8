import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView, StyleSheet, TouchableHighlight} from 'react-native';

export default class FetchApi extends Component{
    constructor(){
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            nodeDataSource: ds,
        };
    }

    componentDidMount(){
        this.fetchApi();
    }

    fetchApi(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    nodeDataSource: this.state.nodeDataSource.cloneWithRows(response)
                });
            });
    }

    onPress(node){
        this.props.navigator.push({
            id: 'nodedetails',
            title: node.title,
            body: node.body
        });
    }

    renderRow(node, sectionId, rowId, highlightRow){
        return(
            <TouchableHighlight onPress={() => {this.onPress(node)}}>
            <View style={styles.row}>
                <Text style={styles.rowText}>{node.title}</Text>
            </View>
            </TouchableHighlight>
        )
    }

    render(){
        return(
        <ListView 
            dataSource={this.state.nodeDataSource}
            renderRow={this.renderRow.bind(this)}
        />
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor: '#f4f4f4',
        marginBottom:3
    },
    rowText: {
        flex:1
    }
});

AppRegistry.registerComponent('FetchApi', () => FetchApi);