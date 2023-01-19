import React, {memo, useEffect, useState} from "react";
import {StyleSheet, View, RefreshControl, ViewStyle, Text, TextStyle, Dimensions} from "react-native";
import {useFocusEffect, useNavigation, useTheme} from "@react-navigation/native";
import axios from "axios";
import {URLS} from "../Constants";
import {FlashList} from "@shopify/flash-list";
import {AEntry} from "../components/EntryPage";
import {useEntryByPage} from "../hooks/useEntryByPage";
import ArrowLeft from "../assets/arrowLeft.svg"
import ArrowRight from "../assets/arrowRight.svg"
import Touchable from "../components/Touchable";
import ActivityIndicator from "../components/ActivityIndicator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {GundemStackParams} from "../navigation/stack/GundemStack";
import Pagination from "../components/Pagination";

export type TGundem = {
    entry_count: string;
    id: number;
    slug: string;
    title: string;
}

const GundemPage = () => {
    const theme = useTheme()
    const navigation = useNavigation<NativeStackNavigationProp<GundemStackParams>>()

    const {width, height} = Dimensions.get("window")

    const {
        calculateEntry,
        page,
        totalPages,
        filteredEntries,
        isLoading,
        increasePage,
        decreasePage,
        updateAllEntries
    } = useEntryByPage()

    const paginationStyle: ViewStyle = {
        ...styles.pagination,
        backgroundColor: theme.colors.background,
        borderTopColor: theme.colors.border,
        borderTopWidth: 2
    }

    const pageTextStyle: TextStyle = {
        ...styles.pageText,
        color: theme.colors.text
    }

    const fetchEntries = async (myPage: undefined | number = undefined) => {
        const req = await axios({
            method: "get",
            url: `${URLS.gundem}`
        })
        updateAllEntries(req.data)
        calculateEntry(req.data, myPage || page)
    }

    useEffect(() => {
        fetchEntries()
    }, [])

    useEffect(() => {

        console.log("total", totalPages)
        console.log("filtrelendi", page)
    }, [filteredEntries])


    useEffect(() => {
        console.log("loading oluyo işte")
    }, [isLoading])


    const onLeft = () => {
        decreasePage()
    }
    const onRight = () => {
        increasePage()
    }
    const onRefresh = () => {
        fetchEntries(1)
    }

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator/>
            ) : (
                <View style={{flex: 1}}>
                    <View style={{flex: 1, marginBottom: 50}}>
                        <FlashList
                            onLoad={() => {
                                console.log("load oldu")
                            }}
                            ListEmptyComponent={() => (
                                <ActivityIndicator/>
                            )}
                            renderItem={({item, index}) => (
                                <>
                                    <Touchable onPress={() => {
                                        navigation.navigate("ThreadPage", {slug: item.slug})
                                    }}>
                                        <AEntry item={item} index={index} theme={theme}/>
                                    </Touchable>
                                    {index % 5 === 0 ? (
                                        <View style={{
                                            width: "100%",
                                            height: height / 3,
                                            backgroundColor: "gray",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}>
                                            <Text>REKLAM FILAN</Text>
                                        </View>
                                    ) : null}
                                </>
                            )}
                            data={filteredEntries}
                            estimatedItemSize={17}
                            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh}/>}
                        />
                    </View>
                    <Pagination
                        onLeft={onLeft}
                        onRight={onRight}
                        activeColor={"#fff"}
                        inactiveColor={theme.colors.text}
                        page={page}
                        totalPages={totalPages}
                        theme={theme}
                    />
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
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

export default GundemPage
