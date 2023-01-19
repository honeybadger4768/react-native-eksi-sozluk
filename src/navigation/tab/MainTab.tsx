import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useTheme} from "@react-navigation/native";
import DebePage from "../../pages/DebePage";
import GundemStack from "../stack/GundemStack";


const Tab = createBottomTabNavigator()

const MainTab = () =>{


    const {colors} = useTheme()

    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                backgroundColor: colors.background,
            },
            tabBarActiveTintColor: colors.card,
            tabBarInactiveTintColor: colors.text,
            tabBarLabelStyle: {
                fontSize: 16
            },
        }}>
            <Tab.Screen name={"GundemStack"} component={GundemStack} options={{title: "Gündem"}} />
            <Tab.Screen name={"DebeStack"} component={DebePage} options={{title: "Debe"}}  />
        </Tab.Navigator>
    )
}

export default MainTab
