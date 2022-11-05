import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
    box:{
        padding: 10, 
        paddingTop:30, 
        flex: 1
    }
})

export const globalStyle = StyleSheet.create({
    row: {
        paddingTop:30,
        flex:1, 
        alignItems:'center', 
        flexDirection:'column', 
        justifyContent:'center'
    },
    container: {
        flex: 1,
        marginTop: 8,
        minHeight: 200,
    },
    tinyImg: {
        width: 50,
        height: 50,
    },
    mediumImg:{
        width: 150,
        height: 150,
    },
    largeImg:{
        width: 220,
        height: 220,
    }
});

export const inputStyle = StyleSheet.create({
    inputView:{
        flex: 1,
        padding: 10, 
        paddingTop:30, 
    },
    input:{
        borderRadius: 10,
        backgroundColor: 'transparent',
        borderColor: '#CFCFCF',
        borderWidth: 3,
        color: '#9F9F9F',
        fontWeight: "500",
        fontSize: 16,
        height: 50,
        margin: 20,
        padding:10,
        width: 300,
        
    }
})

export const buttonStyle = StyleSheet.create({
    buttonPrimary: {
        alignSelf: "center",
        borderRadius: 15,
        backgroundColor: "coral",
        height: 55,
        margin: 20,
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        padding:10,
        paddingVertical:15,
        textAlign: "center",
        width: 300,
        alignItems:'center', 
    },
    buttonSecond: {
        alignSelf: "center",
        borderRadius: 15,
        borderColor: '#CFCFCF',
        borderWidth: 2,
        backgroundColor: "white",
        height: 55,
        margin: 20,
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        padding:10,
        paddingVertical:15,
        textAlign: "center",
        width: 200,
        alignItems:'center', 
    },
    selected: {
        backgroundColor: "coral",
        borderWidth: 0,
    },
    buttonLabel: {
        color: "white",
        fontSize: 18,
        fontWeight: "500",
    },
    buttonInvisible:{
        alignSelf: "center",
        backgroundColor: "transparent",
        height: 30,
        margin: 20,
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        width: 300,
        alignItems:'center', 
    },
    buttonInvisibleLabel:{
        color: "grey",
        fontSize: 16,
        fontWeight: "200",
    },
    buttonSecondLabel:{ 
        color: "#CFCFCF",
        fontSize: 16,
        fontWeight: "200",
    }
});

export const input = StyleSheet.create({

});
