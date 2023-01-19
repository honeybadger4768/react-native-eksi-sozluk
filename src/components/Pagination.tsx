import React from "react";
import Touchable from "./Touchable";
import ArrowLeft from "../assets/arrowLeft.svg";
import {StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import ArrowRight from "../assets/arrowRight.svg";
import {Theme} from "@react-navigation/native";

type TPagination = {
    onLeft: (() => void),
    onRight: (() => void),
    activeColor: string,
    inactiveColor: string,
    page: number,
    totalPages: number,
    theme: Theme
}


const Pagination : React.FC<TPagination> = (props) =>{

    const paginationStyle: ViewStyle = {
        ...paginationStyles.pagination,
        backgroundColor: props.theme.colors.background,
        borderTopColor: props.theme.colors.border,
        borderTopWidth: 2
    }

    const pageTextStyle: TextStyle = {
        ...paginationStyles.pageText,
        color: props.theme.colors.text
    }

    return (
        <View style={paginationStyle}>
            <Touchable
                onPress={props.onLeft}
                style={paginationStyles.paginationItem}
                disabled={props.page - 1 <= 0}
            >
                {/*inactive : active */}
                <ArrowLeft fill={props.page - 1 <= 0 ? props.inactiveColor : props.activeColor }/>
            </Touchable>
            <View style={paginationStyles.paginationItem}>
                <Text style={pageTextStyle}>{props.page}/{props.totalPages}</Text>
            </View>
            <Touchable
                onPress={props.onRight}
                style={paginationStyles.paginationItem}
                disabled={props.page >= props.totalPages}
            >
                {/*inactive : active */}
                <ArrowRight fill={props.page >= props.totalPages ? props.inactiveColor : props.activeColor }/>
            </Touchable>
        </View>
    )
}


const paginationStyles = StyleSheet.create({
    pagination: {
        width: "100%",
        height: 50,
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    paginationItem: {
        marginHorizontal: 50
    },
    pageText: {
        fontSize: 20
    }
})

export default Pagination
