import { StyleSheet,Text,View,Image } from "react-native";
import React from "react";


  const ButtonCostum =({Color, text}) => {
    return(
      <View style={{
        backgroundColor : Color,
        width : 120,
        height : 80,
        borderRadius : 20,
        justifyContent : 'center'

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