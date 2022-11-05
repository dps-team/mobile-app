import React,{useState} from "react";
import { Text, View, ScrollView, TouchableOpacity, TextInput, Image, Alert} from "react-native";
import {globalStyle, buttonStyle, inputStyle} from '../styles/global'
import { useNavigation } from "@react-navigation/native";
import img_routes from '../img/img-routes'
import selectLang from '../lang/index'
import {auth,sendPasswordResetEmail} from '../firebase/firebase-config'

import {emailValidation} from '../utils/validate';


const RecoveryAccountScreen = (props) => {

    const lang = selectLang();
    const navegation = useNavigation();

    const [state, setState] = useState({
        email:'',
        loading: '',
        errorEmail:''
    });

    const handleChange = (name, value) =>{
        setState({ ...state, [name]:value});
    }

    const Recovery = async()=>{
        if(!validateData()){
            return;
        }
        const res = await sendEmail(state.email);

        if(!res.statusResponse){
            console.log("Este correo no esta relacionado a ninguna cuenta");
            Alert.alert("Error","Este correo no esta relacionado a ninguna cuenta");
            return;
        }
        console.log("Correo Enviado con las instrucciones para actualizar la contraseña");
        Alert.alert("Success","Correo Enviado con las instrucciones para actualizar la contraseña");
        navegation.navigate("LoginScreen");
    }

    const validateData = ()=> {
        handleChange('email',null);
        let valid = true;
       
        if(!emailValidation(state.email)){
            handleChange('email',"Debes ingresar un email valido");
            console.log("Debes ingresar un email valido");
            Alert.alert("Error","Debes ingresar un email valido");
            valid = false;
        }
        return valid;
    }

    const sendEmail = async () =>{
        const result = {statusResponse: true, error: null}
        try {
            await sendPasswordResetEmail(auth,state.email)
        } catch (error) {
            result.statusResponse = false;
            result.error = error;
        }
        return result;
    }


    return(
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={globalStyle.row}>
                <View style={{height:50}}></View>
                <View>
                    <Image
                        style={globalStyle.mediumImg}
                        source={{
                        uri: img_routes.logo,
                        }}
                    />
                </View>

                    <View >
                    <TextInput 
                        style={[inputStyle.input]} 
                        placeholder={lang.Pl_In_EmailRecoveryAccount}
                        keyboardType="email-address"
                        onChangeText={(value)=>{
                            handleChange('email',value);
                        }}
                    />
                </View>
               
                <View >
                    <TouchableOpacity
                        style={[buttonStyle.buttonPrimary]}
                        onPress={()=>{
                            Recovery();
                        }}
                    >
                        <Text style={[buttonStyle.buttonLabel]}>{lang.Btn_SendRecoveryAccount}</Text>
                    </TouchableOpacity>
                </View>

                <View >
                    <TouchableOpacity
                        style={[buttonStyle.buttonSecond]}
                        onPress={()=>{
                            navegation.navigate('LoginScreen')
                        }}
                    >
                        <Text style={[buttonStyle.buttonSecondLabel]}>{lang.Btn_CancelRecoveryAccount}</Text>
                    </TouchableOpacity>
                </View>               

            </View>
        </ScrollView>
    );
};

export default RecoveryAccountScreen;