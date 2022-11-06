import React, {useState, useEffect} from 'react';
import { store,auth } from '../firebase/firebase-config'
import { useNavigation } from "@react-navigation/native";
// import toastMsg from '../Toast';

const Access = (props) => {
    const navegation = useNavigation();
    const section = props.section;
    const roles = async ()=>{
        await store.collection('roles').doc(localStorage.getItem('idUser')).get()
        .then(res=>{
            localStorage.setItem('roles', JSON.stringify(res.data()));
            if(!JSON.parse(localStorage.getItem('roles'))[section]){
                // toastMsg.errorToast("No tienes permisos para esta sección");
                navegation.navigate('LoginScreen');
                alert('No tienes permisos para esta sección');
            }
            
        });
    };
    useEffect(() => {
        if(localStorage.getItem('idUser') == undefined){
            navegation.navigate('LoginScreen');
        }else{
            roles();
        }
    })
    
    return(null);
}

export default Access