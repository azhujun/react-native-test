/**
 * Created by hujun on 2017/2/1.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import Main from './pages/Main';

const INIT_ROUTE = {
    component: Main
};

export default class MyApp extends Component {
    renderScene = (route, navigator) => {
        let Comp = route.component;
        return <Comp {...route.params} navigator={navigator} />
    };
    render() {
        return (
            <View
                style={styles.container}>
                <Navigator
                    initialRoute={INIT_ROUTE}
                    renderScene={this.renderScene}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:__IOS__? 20 : 0
    }
});
