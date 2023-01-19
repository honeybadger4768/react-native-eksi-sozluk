import React from "react";
import {GestureResponderEvent, TouchableOpacity, TouchableOpacityProps} from "react-native";

export type TouchableType = {
    children: JSX.Element,
    onPress: ((event: GestureResponderEvent) => void )
} & TouchableOpacityProps

const Touchable : React.FC<TouchableType> = ({children, onPress, ...props}) =>{
    return (
        <TouchableOpacity onPress={onPress} {...props}>
            {children}
        </TouchableOpacity>
    )
}

export default Touchable
