import React from "react";
import { Text, View } from "react-native";

const MenuScreen = () => {
    return(
        <View>
            <Text>Menu</Text>
            <Text>{localStorage.getItem('idUser')}</Text>
        </View>
    );
};

export default MenuScreen;