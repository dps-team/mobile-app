import React, {useState, useEffect} from 'react'
import {  Text, View, ScrollView, TouchableOpacity, Image,  } from 'react-native'
import {globalStyle} from '../styles/global'
import {globalProfile} from '../styles/profile'
import {buttonStyleMenu, globalMenu} from '../styles/fast_questions'
import img_routes from '../img/img-routes'
import selectLang from '../lang/index'
import { store } from '../firebase/firebase-config'

export default function FastQuestions(props) {
    
    const lang = selectLang();
    
    const [pets, setPets] = useState(null);

    const getPets = async () => {
        const dbRef = store.collection('pets');
        const data = await dbRef.get();
        const list = [];
        data.forEach(doc => {
            list.push(doc.data());
        });
        setPets(list);
    };

    useEffect(()=>{
        getPets();
    },[])

    function ListPets() {
        let listPet;
        if(pets !== null){
            listPet = pets.map((item)=>{
                {
                    return(
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
                                <Text style={[globalMenu.labelOrangeMenu]}>{item.Name}</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                    );
                }
            });
        }
        return(
            listPet
        );
    }

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
                {/* List Animals */}
                <View >
                    <ListPets />
                </View>
            </View>
        </ScrollView>
    )
}