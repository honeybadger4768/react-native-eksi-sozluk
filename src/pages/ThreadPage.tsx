import React, {useCallback} from "react";
import {StyleSheet, View} from "react-native";
import {RouteProp, useFocusEffect, useRoute, useTheme} from "@react-navigation/native";
import {GundemStackParams} from "../navigation/stack/GundemStack";
import Pagination from "../components/Pagination";
import {FlashList} from "@shopify/flash-list";
import {useThreadByPage} from "../hooks/useThreadByPage";
import {AThread} from "../components/ThreadPage";

const ThreadPage = () =>{

    const route = useRoute<RouteProp<GundemStackParams, "ThreadPage">>()
    const theme = useTheme()
    const slug = route.params.slug

    const {
        decreasePage,
        increasePage,
        threads,
        page,
        totalPages
    } = useThreadByPage(slug)

    useFocusEffect(
        useCallback(() =>{

        }, [])
    )
    const onLeft = () =>{
        decreasePage()
    }
    const onRight = () =>{
        increasePage()
    }

    return (
        <View style={styles.container}>
            <View style={{flex: 1, marginBottom: 50}}>
                <FlashList
                    data={threads}
                    renderItem={({item}) =>(<AThread item={item} theme={theme} />)}
                    estimatedItemSize={10}
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default ThreadPage
