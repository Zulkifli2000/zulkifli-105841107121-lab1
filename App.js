import { StyleSheet,Text,View,Image } from "react-native";
import React from "react";
import ButtonCostum from "./component/button/button";

const App =() => {
  return(
    <View style ={{flex : 1}}>
      <View style={{
        flex : 1,
        alignItems : 'center',

      }}>
        <text style={{
          fontSize : 50,
          fontWeight :'bold'
        }}> Lazada </text>
      </View>

    <View style={{
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',

    }}>
    <Image source ={require( './Lazada.png')} />
    </View>

    <View style={{
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      flexDirection : 'row',
      justifyContent : 'space-evenly'

    }}>
     <ButtonCostum Color='blue' text='login' />
     <ButtonCostum Color='green' text='SignUp' />
    
    </View>

    </View>

  )
}
export default App
