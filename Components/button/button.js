import { StyleSheet,Text,View,Image } from "react-native";
import React from "react";


  const ButtonCostum =({Color, text}) => {
    return(
      <View style={{
        backgroundColor : Color,
        width : 450,
        height : 50,
        borderRadius : borderRadius,
        justifyContent : 'center',
        marginBottom: 10
      }}>
        <text style={{
          textAlign : 'center',
          fontSize : 30,
          color : 'white',
          fontWeight : 'bold'
        }}>{text}
        </text>
      </View>
    )
}

export default ButtonCostum