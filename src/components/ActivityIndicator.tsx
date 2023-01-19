import React from "react";
import {View, ActivityIndicator as Ac} from "react-native";
import {useTheme} from "@react-navigation/native";


const ActivityIndicator = () =>{

    const theme = useTheme()

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Ac size={"large"} color={theme.colors.card}/>
        </View>
    )
}

export default ActivityIndicator
