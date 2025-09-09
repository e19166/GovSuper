import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './app/(tabs)/screens/LoginScreen';
import HomeScreen from './app/(tabs)/screens/HomeScreen';
import MiniAppScreen from './app/(tabs)/screens/MiniAppScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: { authToken: string };
  MiniApp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MiniApp" component={MiniAppScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
