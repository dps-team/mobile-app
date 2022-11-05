import React,{useState} from "react";
import { View, ScrollView, Image, Text } from "react-native";
import NetInfo from '@react-native-community/netinfo';
import {globalStyle} from '../styles/global'
import img_routes from '../img/img-routes'


const SplashScreen = (props) => {

    const [network, setNetwork] = useState(false);

    function NetwInfo(){
        NetInfo.fetch().then(state => {
            if(state.isConnected){
                setNetwork(true);
            }
        });
    }

    function ViewNet(){
        if(network){
            setNetwork(true);
            const login = () =>{ 
                props.navigation.navigate('LoginScreen');
            }
            setTimeout(login, 500);
            return(
                <View>
                    <Image
                    style={globalStyle.largeImg}
                    source={{
                    uri: img_routes.logo,
                    }}
                    />
                    <Text>Recursos conectado a internet...</Text>
                </View>
            )
        }
        else{
            return(
                <View>
                    <Text>No hay conección a internet intente ingresar más tarde</Text>
                </View>
            )
        }
    }


    return(
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={globalStyle.row}>
                <View style={{height:150}}></View>
                <NetwInfo />
                <ViewNet />
            </View>
        </ScrollView>
    );
};

export default SplashScreen;