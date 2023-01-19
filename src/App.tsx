import React from 'react';
import {
    LogBox,
} from 'react-native';
import {useSelector} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import MainTab from "./navigation/tab/MainTab";
import {RootState} from "./redux/store";
import {darkTheme, whiteTheme} from "./Constants";

//for remote debug
LogBox.ignoreAllLogs()

const App = () => {
    const {isDark, ...state} = useSelector((state: RootState) => state.app)
    return (
        <NavigationContainer theme={isDark ? darkTheme : whiteTheme}>
            <MainTab/>
        </NavigationContainer>
    )
}

export default App;
