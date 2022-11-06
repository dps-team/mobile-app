import {  Text, View, ScrollView, TouchableOpacity, Image,  } from 'react-native'
import {globalStyle} from '../styles/global'
import {globalProfile} from '../styles/profile'
import {buttonStyleMenu, globalMenu} from '../styles/menu'
import img_routes from '../img/img-routes'
import selectLang from '../lang/index'
import Access from '../utils/Access'
import React, {useState, useEffect} from 'react'
import { store } from '../firebase/firebase-config'

export default function MenuScreen(props) {
    
    const lang = selectLang();
    const goProfile = () => {
        props.navigation.navigate('ProfileScreen');
    }

    const goFastQuestions = () => {
        props.navigation.navigate('FastQuestions');
    };

    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <View style={globalStyle.row}>
                {/* Logo */}
                <View>
                    <Image
                        style={[globalStyle.tinyImg,globalProfile.alignRightLogo]}
                        source={{uri: img_routes.logo}}
                    />
                </View>
                <View style={{height:15}}></View>
                {/* Menu */}
                <View >
                    <TouchableOpacity
                        style={[buttonStyleMenu.buttonMenu,]}
                        onPress={()=>{
                            
                        }}
                    >   
                    <View style={[globalProfile.flexRow,globalMenu.displayCentered]}>
                        <View style={[globalMenu.containerIconStyle,]}>
                            <Image
                            style={[globalMenu.iconImgMenu,]}
                            source={{uri: img_routes.other}}
                            />
                        </View>
                        <View style={[]}>
                            <Text style={[globalMenu.labelOrangeMenu]}>Mascotas</Text>
                            <Text style={[globalMenu.labelMenu,]}>Mira la lista de todas tus</Text>
                            <Text style={[globalMenu.labelMenu,]}>mascotas</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[buttonStyleMenu.buttonMenu,]}
                        onPress={()=>{
                            goProfile()
                        }}
                    >   
                    <View style={[globalProfile.flexRow,globalMenu.displayCentered]}>
                        <View style={[globalMenu.containerIconStyle,]}>
                            <Image
                            style={[globalMenu.iconProf,]}
                            source={{uri: img_routes.profile}}
                            />
                        </View>
                        <View style={[]}>
                            <Text style={[globalMenu.labelOrangeMenu]}>Perfil</Text>
                            <Text style={[globalMenu.labelMenu,]}>Visualiza y actualiza</Text>
                            <Text style={[globalMenu.labelMenu,]}>tu información</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[buttonStyleMenu.buttonMenu,]}
                        onPress={()=>{
                            
                        }}
                    >   
                    <View style={[globalProfile.flexRow,globalMenu.displayCentered]}>
                        <View style={[globalMenu.containerIconStyle,]}>
                            <Image
                            style={[globalMenu.iconImgMenu,]}
                            source={{uri: img_routes.request}}
                            />
                        </View>
                        <View style={[]}>
                            <Text style={[globalMenu.labelOrangeMenu]}>Reconsulta</Text>
                            <Text style={[globalMenu.labelMenu,]}>Haz una consulta de</Text>
                            <Text style={[globalMenu.labelMenu,]}>seguimiento sobre</Text>
                            <Text style={[globalMenu.labelMenu,]}>tu última cita</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[buttonStyleMenu.buttonMenu,]}
                        onPress={()=>{
                            goFastQuestions();
                        }}
                    >   
                    <View style={[globalProfile.flexRow,globalMenu.displayCentered]}>
                        <View style={[globalMenu.containerIconStyle,]}>
                            <Image
                            style={[globalMenu.iconImgMenu,]}
                            source={{uri: img_routes.care}}
                            />
                        </View>
                        <View style={[]}>
                            <Text style={[globalMenu.labelOrangeMenu]}>Pregunta rápida</Text>
                            <Text style={[globalMenu.labelMenu,]}>Realiza una consulta</Text>
                            <Text style={[globalMenu.labelMenu,]}>rápida antes de tu cita</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}