/**
 * Created by hujun on 2017/2/1.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '首页',
            modalVisible: false
        }
    }
    _goBack = () =>{
        const {navigator} = this.props;
        navigator.pop();
    };


    render() {
        return (
            <View style={styles.root}>
                {this.props.navigator?
                    <Text style={styles.backBtn} onPress={this._goBack} >后退</Text>
                :
                    <Text style={styles.rowText}></Text>
                }
                <Text style={styles.rowText}>
                    {this.props.title}
                </Text>
                {this.props.rightBtnOnClick?
                    <Text style={styles.rowText} onPress={()=>{
                        this.props.rightBtnOnClick(true);
                    }}>{this.props.rightBtnValue?this.props.rightBtnValue:'右键'}</Text>
                :
                    <Text style={styles.rowText}></Text>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        height: 44,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
    },
    backBtn: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    rowText: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    }
});
