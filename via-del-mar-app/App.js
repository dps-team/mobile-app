
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { useState } from "react";
import {global} from './styles/global'
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import components screen
import LoginScreen from "./screens/LoginScreen";
import MenuScreen from "./screens/MenuScreen";
import SplashScreen from "./screens/SplashScreen";

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
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="MenuScreen" component={MenuScreen}/>
      </Stack.Navigator>
    );
  };

  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
    // <View style={[global.box]}>
    //   <Text>Hello World</Text>
    // </View>
  )
};


export default App;