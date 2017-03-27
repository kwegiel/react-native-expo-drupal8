import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import { getData } from '../actions/actions';

class ListingView extends Component{
    render(){
        return(
        <TouchableHighlight onPress={() => {this.getData("TEST")}}>
            <View style={styles.row}>
                <Text style={styles.rowText}>{this.props.node.title}</Text>
            </View>
        </TouchableHighlight>
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

const mapStateToProps = (state) => {
  return {
    node: state.title
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (number) => {
      dispatch(getData(number));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingView);