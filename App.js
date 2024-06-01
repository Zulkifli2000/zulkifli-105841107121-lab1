import { StyleSheet,Text,View,Image } from "react-native";
import React from "react";

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
    <image source ={require( './Lazada.png.png')} />
    </View>

    <View style={{
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      flexDirection : 'row',
      justifyContent : 'space-evenly'

    }}>
      <View style={{
        backgroundColor : 'blue',
        width : 120,
        height : 80,
        borderRadius : 20,
        justifyContent : 'center'

      }}>
        <text style={{
          textAlign : 'center',
          fontSize : 30,
          color : 'green',
          fontWeight : 'bold'
        }}>Login
        </text>
      </View>


      <View style={{
        backgroundColor : 'yellow',
        width : 120,
        height : 80,
        borderRadius : 20,
        justifyContent : 'center'

      }}>
        <text style={{
          textAlign : 'center',
          fontSize : 30,
          color : 'purple',
          fontWeight : 'bold'
        }}>sign up
        </text>
      </View>

    
    </View>

    </View>

  )
}
export default App
