import { StyleSheet } from "react-native";

export const globalMenu = StyleSheet.create({
    iconImgMenu: {
        width: 40,
        height: 35,
    },
    iconProf: {
        width: 40,
        height: 45,
    },
    labelMenu:{
        color: '#9F9F9F',
        fontWeight: "500",
        fontSize: 16,
        marginLeft: 10,
        
    },
    labelOrangeMenu:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        marginLeft: 10
    },
    alignRightLogo:{
        marginLeft: 250,
    },
    sizeArea:{
        width: 320,
    },
    leftMarg:{
        margin: 5,
    },
    containerIconStyle:{
        backgroundColor: '#F89A1C',
        marginLeft: 10,
        height: 80,
        width: 80,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
    },
    displayCentered:{
        alignItems: 'center',
    },
    hyphenation:{
        wordBreak: 'break-all',
        wordBreak: 'break-word',
        webkitHyphens: 'auto',
        mozHyphens: 'auto',
        msHyphens: 'auto',
        hyphens: 'auto',
   }
});

export const buttonStyleMenu = StyleSheet.create({
    buttonMenu:{
        display: 'flex',
        borderWidth: 2,
        borderColor: '#F89A1C',
        backgroundColor: '#F89A1C',
        justifyContent: 'center',
        alignItems: 'left',
        borderRadius: 10,
        height: 80,
        width: 300,
        margin:10,
    },
});


