/**
 * Created by hujun on 2017/2/1.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Header from '../components/Header';
export default class ItemInfos extends Component {

    render() {
        return (
            <View style={styles.root}>
                <Header title={this.props.rowData} navigator={this.props.navigator} />
                <Text>{this.props.rowData}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
});
