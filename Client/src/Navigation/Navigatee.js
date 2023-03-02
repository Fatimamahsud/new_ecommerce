import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../Screens/Landing';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';

const Stack = createNativeStackNavigator();
export default function Navigatee() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
     </NavigationContainer>
  )
}
