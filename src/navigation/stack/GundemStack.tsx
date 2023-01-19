import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import GundemPage from "../../pages/GundemPage";
import ThreadPage from "../../pages/ThreadPage";

export type GundemStackParams = {
    GundemPage: undefined;
    ThreadPage: {slug: string}
};


const Stack = createNativeStackNavigator<GundemStackParams>()

const GundemStack = () =>{
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name={"GundemPage"} component={GundemPage} />
            <Stack.Screen name={"ThreadPage"} component={ThreadPage} />
        </Stack.Navigator>
    )
}
export default GundemStack
