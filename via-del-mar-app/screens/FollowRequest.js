import React, {useState, useEffect} from 'react'
import {  Text, View, ScrollView, TouchableOpacity, Image, Linking } from 'react-native'
import {globalStyle} from '../styles/global'
import {globalProfile} from '../styles/profile'
import {buttonStyleMenu, globalMenu} from '../styles/fast_questions'
import img_routes from '../img/img-routes'
import { store } from '../firebase/firebase-config'
import {TypeUser} from '../utils/Access'

export default function FollowRequest() {
    
    const [pets, setPets] = useState(null);
    const [user, setUser] = useState(null);

    const getPets = async () => {
        const dbRef = store.collection('pets');
        const data = await dbRef.get();
        const list = [];
        data.forEach(doc => {
            list.push(doc.data());
        });
        setPets(list);
    };

    const getPetsClient = async () =>{
        const petsUser = store.collection('pets');
        petsUser.where("id", "==", `${localStorage.getItem("idUser")}`, true).get()
        .then(async (querySnapshot)=>{
            if(querySnapshot.size !=0){
                const list = [];
                querySnapshot.forEach(async(doc) =>{
                    list.push(doc.data());
                });
                setPets(list);
            }else{
                console.log("Not found data")
            }
        });
    }

    const getUserById = async () => {
        const id = localStorage.getItem('idUser')
        const dbRef = store.collection('users').doc(id);
        const doc = await dbRef.get();
        const user = doc.data();
        setUser(user);
    }

    const sendWhatsApp = async (url) => {
        const supported = await Linking.canOpenURL(url);
        if (supported) {
            await Linking.openURL(url);
        } else {
            // Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    };

    useEffect (async ()=>{
        getUserById();
       await TypeUser(getPets,getPetsClient);
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
                                const url = `https://api.whatsapp.com/send?phone=50373488802&text=${'Hola Doc soy ' + user.name + ' usted me ayudo con mi mascota '+ item.Name + ' tengo una duda con el proceso post atención'}`
                                sendWhatsApp(url);
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