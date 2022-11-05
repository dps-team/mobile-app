import React,{useState} from "react";
import { Text, View, ScrollView, TouchableOpacity, TextInput, Image, Alert} from "react-native";
import {globalStyle, buttonStyle, inputStyle} from '../styles/global'
import { useNavigation } from "@react-navigation/native";
import img_routes from '../img/img-routes'
import selectLang from '../lang/index'
import {auth,sendPasswordResetEmail} from '../firebase/firebase-config'

import { Field,Form,Formik } from 'formik';
import recoveryValidationSchema from '../utils/validate'


const RecoveryAccountScreen = (props) => {

    const lang = selectLang();
    const navegation = useNavigation();

    const [errorEmail, setErrorEmail] = useState();
    const [loading, setLoading] = useState();
    const [token, setToken] = useState();

    const [state, setState] = useState({
        email:'',
    });

    const handleChangeText = (name, value) =>{
        setState({ ...state, [name]:value});
    }

    const Recovery = async()=>{
    
        if(!validateData()){
            return;
        }
        const res = await sendEmail(state.email);
        console.log(res);

        if(!res.statusResponse){
            Alert.alert("Error","Este correo no esta relacionado a ninguna cuenta");
            return;
        }
        Alert.alert("Success","Correo Enviado con las instrucciones para actualizar la contraseña");
        navegation.navigate("LoginScreen");
    }

    const validateData = ()=> {
        setErrorEmail(null);
        let valid = true;
       
        // if(recoveryValidationSchema({email: state.email})){
        //     Alert.alert("Error","Debes ingresar un email valido");
        //     setErrorEmail("Debes ingresar un email valido");
        //     valid = false;
        // }
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

                {/* <Formik
                onSubmit={(values) => console.log(values)}
                validationSchema={recoveryValidationSchema}
                initialValues={{
                    email: "",
                }}
                > */}
                    <View >
                    <TextInput 
                        style={[inputStyle.input]} 
                        placeholder={lang.Pl_In_EmailRecoveryAccount}
                        keyboardType="email-address"
                        onChangeText={(value)=>{
                            handleChangeText('email',value);
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
                
                {/* </Formik> */}

                

            </View>
        </ScrollView>
    );
};

export default RecoveryAccountScreen;