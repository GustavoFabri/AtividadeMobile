import { StyleSheet } from  'react-native';

export const styles = StyleSheet.create({
    container : {
      flex: 1 ,
      padding:24,
      backgroundColor:'#131016'
    },
    title : {
      color:'#fff',
      fontSize:24,
      fontWeight:'bold',
      marginTop:48
    },
    date : {
      color:'#fff'
    }, 
    input : {
        height: 56,
        backgroundColor: '#1F1E25',
        color: '#fff',
        paddingLeft: 16,
        borderRadius: 5,  
        fontSize: 18,
        flex:1
    },
    button : {

        height:56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton : {
        fontSize: 28,
        color: '#fff'
    },
    form: {
        height: 120,

        marginTop: 24,
        gap: 10,
        flexDirection: 'column'
    },

  
})