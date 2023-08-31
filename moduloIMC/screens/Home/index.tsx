import { Text, View, TextInput, TouchableOpacity, Alert, FlatList, KeyboardAvoidingView, KeyboardAvoidingViewBase} from "react-native";
import React, { useState } from 'react';
import { styles } from './styles';
import { Produto } from "../../components/Botao";


export default function Home() {
    

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');


    function calcularIMC(){

        const pesoN = parseFloat(peso);
        const alturaN = parseFloat(altura);

        const imc = pesoN / (alturaN * alturaN);

        if (imc < 18.5){
            setResultado('Baixo Peso')
        }
        else if (imc >= 18.5 && imc < 24.9){
            setResultado('Peso Normal')
        }
        else if (imc >= 25 && imc < 29.9){
            setResultado('SobrePeso')
        }
        else if (imc >= 30 && imc < 34.9){
            setResultado('Obesidade Grau 1')
        }
        else if (imc >= 35 && imc < 39.9){
            setResultado('Obesidade Grau 2')
        }
        else{
            setResultado('Obesidade Grau 3')
        }
    
    }


    return (
    
        <View style={styles.body}>


            <View style={styles.container}>
                <Text style={styles.title}>Calculadora de IMC</Text>
                <Text style={styles.date}>Descubra qual o seu índice de Massa Corporal</Text>

                <View style={styles.form}>
                    <View style={styles.formPeso}>

                        <Text style={styles.txtPeso}>Peso (Kg)</Text>
                        <TextInput 
                            keyboardType = 'numeric'
                            style={styles.peso}
                            
                            placeholderTextColor={'#fff'}
                            onChangeText={text => setPeso(text)}
                            value={peso}

                        ></TextInput>

                        
                    </View>

                    <View style={styles.formAltura}>

                        <Text style={styles.txtAltura}>Altura (m)</Text>
                        <TextInput 
                                keyboardType = 'numeric'
                                style={styles.altura}
                                
                                placeholderTextColor={'#fff'}
                                onChangeText={text => setAltura(text)}
                                value={altura}

                        ></TextInput>
                    </View>

                    
                </View>
                


                <View style={styles.formBtt}>
                    <TouchableOpacity 
                            style={styles.button}
                            onPress={calcularIMC}>
                        <Text style={styles.textButton}>Calcular</Text>
                    </TouchableOpacity>
                </View>


                
            </View>
            <View style={styles.formRes}>
                

                <View style={styles.formTxt}>
                    <Text style={styles.titleInd}>Seu índice de massa corporal é</Text>
                    <Text style={styles.resultado}>
                        {resultado}
                    </Text>
                </View>
        
            </View>
            <View style={styles.rodape}>
                <Text style={styles.txtRodape}>CESUL</Text>
            </View>
        </View>

       
        
        
        
    )
}