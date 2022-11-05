import React from "react";
import { Text, View } from "react-native";

const Request = () => {
    return(
        <View>
            <Text>Request</Text>
            <Text>{localStorage.getItem('idUser')}</Text>
        </View>
    );
};

export default Request;