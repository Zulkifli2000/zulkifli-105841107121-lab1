import * as React from 'react';
import { View, Text, Button,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login'
import SignUp from './SignUp'
import Forgot from './Forgot'

function Homescreen ({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title='ke halaman login' onPress={() => navigation.navigate('Login')}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} option={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} option={{headerShown: false}} />
        <Stack.Screen name="Forgot" component={Forgot} option={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;