import * as React from 'react';
import { View, Text, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeAktif from './assets/icon/HomeAktif.jpeg'
import HomeInAktif from './assets/icon/HomeInAktif.jpeg'
import Shop from './assets/icon/Shop.jpeg'
import ShopInAktif from './assets/icon/ShopInAktif.jpeg'
import Login from './Login'
import SignUp from './SignUp'
import Forgot from './Forgot'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerShown: false, tabBarIcon: ({ focused}) => (
           <Image
             source={focused? HomeAktif : HomeInAktif}
             style={{width: 40, height: 40}}
           />
          ),
        }}
      />
      <Tab.Screen 
        name="SignUp" 
        component={SignUp} 
        options={{
          headerShown: false, tabBarIcon: ({ focused}) => (
           <Image
             source={focused? Shop : ShopInAktif}
             style={{width: 40, height: 40}}
           />
          ),
        }}
      />
    <Tab.Screen 
        name="Login"
        component={Login}
        options={{
          headerShown: false, tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Shop : ShopInAktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
   </Tab.Navigator>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Ke Halaman Login" onPress={() => navigation.navigate('Login')}/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signUp" component={MyTabs} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}  


export default App;