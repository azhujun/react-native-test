/**
 * Created by hujun on 2017/2/1.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import ItemInfo from '../pages/ItemInfos';
export default class Item extends Component {
    _pressRow = ()=> {
        const { navigator }  = this.props;
        navigator.push({
            component: ItemInfo,
            name: '详情',
            params: this.props
        });
    };

    render() {
        return (
            <TouchableOpacity onPress={()=>this._pressRow()}>
                <View style={styles.root}>
                    <Text>
                        {this.props.rowData}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        height:35,
        alignItems: 'center',
    }
});
