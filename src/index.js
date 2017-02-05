import { AppRegistry } from 'react-native';
import MyApp from './App';

if(!__DEV__){
    global.console={
        log: ()=>{},
        info: ()=>{},
        warn: ()=>{},
        error: ()=>{}
    };
}
AppRegistry.registerComponent('MyApp', () => MyApp);
