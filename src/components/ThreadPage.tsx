import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";
import { TThread } from "../hooks/useThreadByPage";
import { Theme } from "@react-navigation/native";
import HighLight from "./HighLight";

type ThreadProps = {
  item: TThread,
  theme: Theme
}

export const AThread: React.FC<ThreadProps> = ({ item, theme }) => {

  const threadStyle: ViewStyle = {
    ...styles.thread,
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.border
  };

  const textStyle: TextStyle = {
    ...styles.text,
    color: theme.colors.text
  };

  return (
    <View style={styles.thread}>
      <View>
        <HighLight style={textStyle}>{item.body}</HighLight>
      </View>
    </View>
  );
};


export type HeaderProps = {
  title: string,
  theme: Theme
}

export const Header: React.FC<HeaderProps> = (props) => {

  const HeaderStyle: ViewStyle = {
    ...styles.Header,
    backgroundColor: props.theme.colors.background,
  };

  const HeaderTitleStyle : TextStyle = {
    ...styles.HeaderTitle,
    color: props.theme.colors.text
  }



  return (
    <View style={styles.Header}>
      <Text style={HeaderTitleStyle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  thread: {
    width: "100%",
    minHeight: 100,
    borderTopWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  text: {
    fontSize: 14
  },
  Header: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  HeaderTitle: {
    fontSize: 20
  }
});
