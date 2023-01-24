import React from "react";
import { Linking, Text, TextStyle, View } from "react-native";
import Touchable from "./Touchable";


type HighLightProps = {
  children: string,
  style: TextStyle
}

const HighLight: React.FC<HighLightProps> = (props) => {

  let brReg = new RegExp(/\[BR\]/, "gi");
  let linkReg = new RegExp(/(\[Link href=.+ text=.+\])/, "g");
  let text = props.children.replace(brReg, "\n");

  return (
    <Text style={props.style}>
      {text.split(linkReg).map((t, i) => {
        if(linkReg.test(t)){
          t = t.replace("[", "")
          t = t.replace("]", "")
          const text = t.split(" ")
          const href = text.find(t => t.startsWith("href="))?.split("=")[1] || "null"
          const content = text.find(t => t.startsWith("text="))?.split("=")[1].replace("!'^+", " ")

          return (
            <Touchable key={i} style={{alignItems: "center", justifyContent: "center"}}>
              <Text style={{color: "green"}} onPress={() =>{
                Linking.openURL(href)
              }}>
                {content}
              </Text>
            </Touchable>
          )
        } else{
          return t
        }
      })}
    </Text>
  )
};

export default HighLight;
