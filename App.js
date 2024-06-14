import { StyleSheet, Text, View, TextInput } from "react-native-web";
import React  from "react";
import ButtonCostum from "./component/button/button";

const App =() => {
const TextInputCustom = ({name, color}) => {
  return (
      <TextInput
       placeholder={`Masukkan ${name}`}
       style={{
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth:1,
        color: color,
        padding:10,
        margin:10,
        borderRadius:10,
        paddingLeft: 10,
       }}
    />   
  )
}
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <TextInputCustom name = "nama" color= "black"></TextInputCustom>
      <TextInputCustom name = "email" color= "green"></TextInputCustom>
      <TextInputCustom name = "password" color= "black"></TextInputCustom>
      <ButtonCostum Text ="signUp" color ="white"></ButtonCostum>
    </View>
  )
}
export default App