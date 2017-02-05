/**
 * Created by hujun on 2017/2/1.
 */
/**
 * Created by hujun on 2017/2/1.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import ItemList from '../components/ItemList';

export default class Setting extends Component {
    render() {
        const { navigator } = this.props;
        return (
            <View style={styles.root}>
                <ItemList navigator={this.props.navigator} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
});
