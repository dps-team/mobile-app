
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { useState } from "react";
import {global} from './styles/global'
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import components screen
import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";
import SplashScreen from "./screens/SplashScreen";
import RecoveryAccoutScreen from "./screens/RecoveryAccountScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FollowRequest from "./screens/FollowRequest";

const App = () => {

  const Stack = createNativeStackNavigator();

  function MyStack() {
    return(
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen}/>
        <Stack.Screen name="MenuScreen" component={MenuScreen}/>
        <Stack.Screen name="FollowRequest" component={FollowRequest} />
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="RecoveryAccountScreen" component={RecoveryAccoutScreen}/>
      </Stack.Navigator>
    );
  };

  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
};


export default App;