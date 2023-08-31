import { StyleSheet } from  'react-native';

export const styles = StyleSheet.create({
    container : {
      height : 340,
      flexDirection : 'column',
      alignItems : 'center',
      
      padding:24,
      backgroundColor:'#967ADC'
    },

    formPeso : {
      width: '40%',
      height : 70,

    },

    formAltura : {
      width: '40%',
      height : 70,
    },

    title : {
      color : "#fff",
      fontSize:24,
      fontWeight:'bold',
      marginTop:48
    },

    titleInd:{
      color : "#967ADC",
      fontSize:24,
      fontWeight:'bold',
      marginTop:48
    },
    date : {
      color:'#fff'
    }, 

    txtPeso :{
      fontSize : 15,
      color : "#fff",
    },

    txtAltura :{
      fontSize : 15,
      color : "#fff",
    },

    peso : {
        width : "100%",
        height: 56,
        backgroundColor: '#fff',
        color: '#000000',
        
        borderRadius: 5,  
        fontSize: 18,
        flex:1,
        textAlign : 'center',
    },
    altura : {
      flex: 1,
      width : "100%",
      height: 70,
      backgroundColor: '#fff',
      color: '#000000',
      
      borderRadius: 5,  
      fontSize: 18,
      textAlign : 'center',
      
  },
    button : {
        width : '100%',
        height:56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },

    formBtt: {
      width: '100%',
      height : 56,
    },

    textButton : {
        fontSize: 28,
        color: '#fff'
    },
    form: {
        width : '100%',
        height: 120,
        marginTop: 24,
        justifyContent: 'space-between',
        flexDirection: 'row'

    },

    resultado : {
      fontSize : 24,
      color : "#967ADC"
    },

    formRes :{
      width : '100%',
      height : '50%',
      backgroundColor : '#fff',
      marginTop : 50,
      justifyContent : 'center',
      
    },

    body : {
      height : '100%',
      width : '100%',
      
    },

    rodape : {
      height : '6%',
      width : '100%',
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : "#967ADC",
      
    },

    txtRodape :{
      fontSize : 24,
      fontWeight:'bold',
      color : "#fff",
    },

    formTxt :{
      width : '100%',
      height : '50%',
      alignItems : 'center',
    },
  
})