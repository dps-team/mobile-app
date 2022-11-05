import { StyleSheet } from "react-native";

export const globalProfile = StyleSheet.create({
    supTinyImg: {
        width: 35,
        height: 30,
    },
    label:{
        color: '#9F9F9F',
        fontWeight: "500",
        fontSize: 16,
        marginLeft: 10,
    },
    labelOrange:{
        color: '#F89A1C',
        fontWeight: "500",
        fontSize: 20,
    },
    alignRightLogo:{
        marginLeft: 250,
    },
    sizeArea:{
        width: 320,
    },
    flexRow:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
    },
    vertMarg:{
        margin: 10,
    },
    leftMarg:{
        margin: 5,
    },
    ajustText:{
        wordWrap: 'break-word',
    }
});

export const inputProfile = StyleSheet.create({
    inputForm:{
        borderRadius: 10,
        backgroundColor: 'transparent',
        borderColor: '#CFCFCF',
        borderWidth: 3,
        color: '#9F9F9F',
        fontWeight: "500",
        fontSize: 16,
        height: 50,
        margin: 10,
        padding:10,
        width: 300,
    }
})

export const buttonProfile = StyleSheet.create({
    buttonPet:{
        backgroundColor: '#F89A1C',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: 5,
        height: 55,
        width: 55,
    },
    buttonMorePets:{
        borderWidth: 2,
        borderColor: '#F89A1C',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft: 5,
        height: 55,
        width: 55,
    }
});


