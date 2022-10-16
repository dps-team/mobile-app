import React,{useState} from "react";
import { Text, View, ScrollView, TouchableOpacity, TextInput, Image, } from "react-native";
import {globalStyle, buttonStyle, inputStyle} from '../styles/global'
import img_routes from '../img/img-routes'
import selectLang from '../lang/index'
import {auth} from '../firebase/firebase-config'

const LoginScreen = (props) => {

    const lang = selectLang();

    const [state, setState] = useState({
        user:'',
        pass:''
    });

    const login = async () => {
        try {
            await auth.signInWithEmailAndPassword(state.user,state.pass)
            .then(async (res)=> {
                localStorage.setItem('idUser', res.user.uid);
                props.navigation.navigate('MenuScreen');
            })
            .catch((e)=>{
                if(e.code === 'auth/user-not-found'){
                    console.log('autenticacion fallida')
                }
                if(e.code === 'auth/wrong-password'){
                    console.log('password incorrecta')
                }
            })
        } catch (error) {
            console.log(error);
        }
    };

    // const loginGoogle = async () => {
    //     try {
    //         const provider = new firebase.auth.GoogleAuthProvider();
    //         console.log(provider);
    //         firebase.auth().signInWithPopup(provider)
    //         .then((result)=>{
    //             console.log(result);
    //             console.log(result.user.uid);
    //         })
            
    //     } catch (error) {
    //         alert(error)
    //     }
    // };

    const handleChangeText = (name, value) =>{
        setState({ ...state, [name]:value});
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
                        placeholder={lang.Pl_In_UserLogin}
                        onChangeText={(value)=>{
                            handleChangeText('user',value);
                        }}
                    />
                </View>
                <View >
                    <TextInput 
                        style={[inputStyle.input]} 
                        placeholder={lang.Pl_In_PassLogin}
                        secureTextEntry={true}
                        onChangeText={(value)=>{
                            handleChangeText('pass',value);
                        }}
                    />
                </View>
                <View >
                    <TouchableOpacity
                        style={[buttonStyle.buttonPrimary]}
                        onPress={()=>{
                            login();
                        }}
                    >
                        <Text style={[buttonStyle.buttonLabel]}>{lang.Btn_Login}</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableOpacity
                        style={[buttonStyle.buttonInvisible]}
                    >
                        <Text style={[buttonStyle.buttonInvisibleLabel]}>{lang.Btn_ForgotPass}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;