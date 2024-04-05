import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './StartScreen';
import LoginSignupScreen from './LoginSignupScreen'; 
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="LoginSignupScreen" component={LoginSignupScreen} />  */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        {/* <Stack.Screen name="SignupScreen" component={SignupScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


