import { StyleSheet } from  'react-native';

export const styles = StyleSheet.create({
    container : {
        
        backgroundColor:'#1f1e25',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItens: "center",
        width: "100%",
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },

    name:{
        color: '#fff',
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
    },

    button:
    {width:56,
        height:56,
        borderRadius: 5,
        backgroundColor: '#e21c44',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton:{
        fontSize: 28,
        color: '#fff'
    },
    
});