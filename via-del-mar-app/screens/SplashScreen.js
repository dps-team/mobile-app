import React from "react";
import { Text, View } from "react-native";

const SplashScreen = (props) => {
    const time = () => {
        const login = () => props.navigation.navigate('LoginScreen');
        setTimeout(login, 1000);
    };
    time();
    return(
        <View> 
            <Text>Splash</Text>
        </View>
    );
};

export default SplashScreen;