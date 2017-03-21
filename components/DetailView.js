import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, ListView, TouchableHighlight, StyleSheet, Image } from 'react-native';

export default class DetailView extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            nid: this.props.node.nid,
            nodeDataSource: ds
        }
    }
    componentDidMount() {
        this.fetchDetailApi();
    }
    fetchDetailApi() {
        let url = 'https://api.wegiel.net/v1/ogloszenia/' + this.state.nid;
        fetch(url)
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    nodeDataSource: this.state.nodeDataSource.cloneWithRows(response)
                });
            });
    }
    onPress() {
        this.props.navigator.push({
            id: 'nodelist'
        });
    }
    renderRow(node, sectionId, rowId, highlightRow) {
        return (
            <TouchableHighlight onPress={() => { this.onPress(node) }}>
                <View style={styles.row}>
                    <Text style={styles.rowText}>{node.nid} - {node.title} | {node.created} | {node.body}</Text>
                    <Image
                        style={styles.rowImg}
                        source={{ uri: node.field_photo }}
                    />
                </View>
            </TouchableHighlight>
        )
    }
    render() {
        return (
            <ListView
                dataSource={this.state.nodeDataSource}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

const styles = StyleSheet.create({
    row: {        
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    },
    rowImg: {
        flex: 1,
        height: 200,
        width: 200
    }
});

AppRegistry.registerComponent('DetailView', () => DetailView);
