/**
 * Created by hujun on 2017/2/1.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';
import Item from './Item';
export default class ItemList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.genRows())
        };

    }

    genRows(){
        const dataBlob = [];
        for(let i = 0 ; i< 50 ; i ++ ){
            dataBlob.push("aa"+i);
        }
        return dataBlob;
    }

    render() {
        return (
            <View style={styles.root}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Item rowData = {rowData} navigator={this.props.navigator}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    }
});
