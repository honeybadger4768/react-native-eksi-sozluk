import React, {memo} from "react";
import {TGundem} from "../pages/GundemPage";
import {StyleSheet, Text, View, TextStyle} from "react-native";
import {Theme, useTheme} from "@react-navigation/native";


export type TAEntry = {
    item: TGundem,
    theme: Theme,
    index: number
}

export const AEntry : React.FC<TAEntry> = ({item, index, theme}) =>{

    const {colors} = theme

    const style = {
        ...styles.aEntryContainer,
        backgroundColor: index % 2 === 0 ? colors.background : colors.border
    }

    const textStyle : TextStyle = {
        ...styles.aEntryText,
        color: colors.text
    }

    return (
        <View style={style}>
            <Text style={textStyle}>{item.title}</Text>
            <Text style={[textStyle, {color: colors.card}]}>{item.entry_count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    aEntryContainer: {
        width: "100%",
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        alignItems: "center"
    },
    aEntryText: {
        fontSize: 16
    }
})
