/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import LandingScreen from './src/screens/LandingScreen';
import Home from './src/screens/Home';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen name="LandingPage" component={LandingScreen} />
            <Stack.Screen name="Details" component={HomeScreen} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}

export default App;
