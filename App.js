import { useFonts } from 'expo-font';
import { Text, View } from 'react-native-web';

export default function App() {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/font/Metropolis-Black.otf'),
    'MetroBold': require('./assets/font/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/font/Metropolis-Light.otf'),
    'MetroMedium': require('./assets/font/Metropolis-Medium.otf'),
    'MetroSemiBold': require('./assets/font/Metropolis-SemiBold.otf'),
  });

  if (!dapatFont) {
    return <Text> font tidak ditemukan ...</Text>
  }
  return (
    <View style={{
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center",
    
    }}>
    <Text style = {{fontFamily : 'MetroBlack'}}> font metropolis black </Text>
    <Text style = {{fontFamily : 'MetroBold'}}> font metropolis bold </Text>
    <Text style = {{fontFamily : 'MetroLight'}}> font metropolis light </Text>
    <Text style = {{fontFamily : 'MetroMedium'}}> font metropolis medium </Text>
    <Text style = {{fontFamily : 'MetroSemiBold'}}> font metropolis SemiBold </Text>
    </View>

  )
}