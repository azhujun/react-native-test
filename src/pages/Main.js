/**
 * Created by hujun on 2017/2/1.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableHighlight
} from 'react-native';

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import Header from '../components/Header';

import Index from './Index';
import Box from './Box';
import Setting from './Setting';

export default class MyApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '首页',
            modalVisible: false
        }
    }
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }
    render() {
        return (
            <View
                style={styles.container}>

                <Header title={this.state.title} rightBtnOnClick={this.setModalVisible.bind(this)}/>
                <ScrollableTabView
                    tabBarPosition='bottom'
                    renderTabBar={() => <DefaultTabBar />}
                    onChangeTab={(obj) => {
                        this.setState({title:obj.ref.props.tabLabel})
                      }
                    }
                >
                    <Index tabLabel='首页' navigator={this.props.navigator}/>
                    <Box tabLabel='消息' navigator={this.props.navigator} />
                    <Setting tabLabel='设置' navigator={this.props.navigator} />
                </ScrollableTabView>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
