import {  Text, View, ScrollView, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native'
import {globalStyle, buttonStyle} from '../styles/global'
import {globalProfile, buttonProfile, inputProfile} from '../styles/profile'
import img_routes from '../img/img-routes'
import selectLang from '../lang/index'
import {Access} from '../utils/Access'
import React, {useState, useEffect} from 'react'
import { store } from '../firebase/firebase-config'

export default function PerfilScreen(props) {

    const goMenu = () => {
        props.navigation.navigate('MenuScreen');
    }
    
    const lang = selectLang();

    const initialState = {
        id: "",
        name: "",
        phone: "",
        address: "",
        email: "",
    }

    const [user, setUser] = useState(initialState);
    const [loading, setLoading] = useState(true);

    const getUserById = async (id) => {
        const dbRef = store.collection('users').doc(id);
        const doc = await dbRef.get();
        const user = doc.data();
        setUser({ ...user, id: doc.id});
        setLoading(false)
    }

    useEffect(() => {
        getUserById(localStorage.getItem('idUser'));
    }, [])
    
    const handleChangeText = (name, value) => {
        setUser({ ...user, [name]: value});
    };

    const updateteUser = async () => {
        const dbRef = store.collection('users').doc(user.id);
        await dbRef.set({
            name: user.name,
            phone: user.phone,
            address: user.address,
            email: user.email,
        })
        alert('Updated');
        goMenu();
    }

    

    // const createUser = async () => {
    //     if (state.name === '') {
    //         alert('Please provide a name');
    //     } 
    //     if (state.phone === '') {
    //         alert('Please provide a phone');
    //     }
    //     if (state.address === '') {
    //         alert('Please provide a address');
    //     }
    //     if (state.email === '') {
    //         alert('Please provide a email');
    //     }else {
    //         await store.collection('users').add({
    //             name: state.name,
    //             phone: state.phone,
    //             address: state.address,
    //             email: state.email,
    //         })
    //         alert('Saved');
    //     }
    // };

    if (loading) {
        return (
            <View style={globalStyle.row}>
                <ActivityIndicator size ="large" color="#F89A1C"/>
            </View>
        )
    }

    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <Access section="profile"/>
            <View style={globalStyle.row}>
                {/* Logo */}
                <View>
                    <Image
                        style={[globalStyle.tinyImg,globalProfile.alignRightLogo]}
                        source={{uri: img_routes.logo}}
                    />
                </View>
                {/* Mis mascotas */}
                <View style={[globalProfile.sizeArea]}>
                <Text style={globalProfile.label}>{lang.Lbl_MyPets}</Text>
                </View>
                <View style={[globalProfile.sizeArea, globalProfile.flexRow, globalProfile.vertMarg]}>
                    <TouchableOpacity style={[buttonProfile.buttonPet]}>
                        <Image
                        style={[globalProfile.supTinyImg]}
                        source={{uri: img_routes.cat}}
                        />
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[buttonProfile.buttonPet]}>
                        <Image
                        style={[globalProfile.supTinyImg]}
                        source={{uri: img_routes.dog}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[buttonProfile.buttonPet]}>
                        <Image
                        style={[globalProfile.supTinyImg]}
                        source={{uri: img_routes.fish}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={[buttonProfile.buttonPet]}>
                        <Image
                        style={[globalProfile.supTinyImg]}
                        source={{uri: img_routes.other}}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[buttonProfile.buttonMorePets]}
                    >
                        <Text style={globalProfile.labelOrange}>...</Text>
                    </TouchableOpacity>
                </View>
                {/* Mi informacion */}
                <View>
                    <Text style={globalProfile.label}>{lang.Lbl_MyInfo}</Text>
                    <TextInput 
                        style={[inputProfile.inputForm]} 
                        placeholder={lang.Pl_FullName} 
                        value={user.name} 
                        onChangeText={(value)=>{
                            handleChangeText('name',value);
                        }}
                    />
                </View>
                <View >
                    <TextInput 
                        style={[inputProfile.inputForm]} 
                        placeholder={lang.Pl_PhoneNumber}
                        value={user.phone}
                        onChangeText={(value)=>{
                            handleChangeText('phone',value);
                        }}
                    />
                </View>
                <View >
                    <TextInput 
                        style={[inputProfile.inputForm]} 
                        placeholder={lang.Pl_Address}
                        value={user.address}
                        onChangeText={(value)=>{
                            handleChangeText('address',value);
                        }}
                    />
                </View>
                <View >
                    <TextInput 
                        style={[inputProfile.inputForm]} 
                        placeholder={lang.Pl_Email}
                        value={user.email}
                        onChangeText={(value)=>{
                            handleChangeText('email',value);
                        }}
                    />
                </View>
                <View >
                    <TouchableOpacity
                        style={[buttonStyle.buttonPrimary]}
                        onPress={()=>{
                            updateteUser();
                        }}
                    >
                        <Text style={[buttonStyle.buttonLabel]}>{lang.Btn_SendProfile}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[buttonStyle.buttonSecond]}
                        onPress={()=>{
                            goMenu();
                        }}
                    >
                        <Text style={[buttonStyle.buttonSecondLabel]}>{lang.Btn_CancelProfile}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}