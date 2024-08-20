import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelpScreen from './screens/HelpScreen';
import GetHelpScreen from './screens/GetHelpScreen';
import LogInScreen from './screens/LogInScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView 
            behavior={ Platform.OS === "ios" ? "padding" : "height" }
            style={{ flex:1 }}
            keyboardVerticalOffset={ Platform.OS === "ios" ? -64 : 0 }
          >
            <Stack.Navigator>
              <Stack.Screen name="LogInScreen" component={LogInScreen} options={{ headerShown: false }} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: false }} />
              <Stack.Screen name="GetHelpScreen" component={GetHelpScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
;
