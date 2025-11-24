
// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {NavigationContainer } from '@react-navigation/native'
import {RootNavigator} from './src/navigation/RootNavigator'
import {
  SafeAreaProvider
} from 'react-native-safe-area-context';


function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;