/**
 * @format
 */
import React from "react";
import {AppRegistry} from 'react-native';
import AppComponent from './src/App';
import {name as appName} from './app.json';
import {Provider} from "react-redux";
import {store} from "./src/redux/store";


const App = () => {
    return (
        <Provider store={store}>
            <AppComponent/>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => App);
