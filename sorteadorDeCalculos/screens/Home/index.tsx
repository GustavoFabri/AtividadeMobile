import { Text, View, TextInput, TouchableOpacity, Alert, FlatList} from "react-native";
import React, { useState } from 'react';
import { styles } from './styles';



export default function Home() {
    

    const [num1, setNum1] = useState('0');
    const [num2, setNum2] = useState('0');
    const [operador, setOperador] = useState('');
    const operadores = '+-/*';
    const [acerto, setAcerto] = useState('0');
    const [erro, setErro] = useState('0');

    const [resposta, setResposta] = useState('');

    const [pontos, setPontos] = useState('0');

    var result: Number

    const min = 0;
    const max = 10;

    function sortearDesafio(){

        const aleatorio = Math.floor(Math.random() * operadores.length);

        // Acessar o operador correspondente ao índice gerado aleatoriamente
        const operadorSorteado = operadores.charAt(aleatorio);
        
        setOperador(operadorSorteado)


        const sotNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
        const numero1 = sotNum1.toString();
        setNum1(numero1)

        const sotNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
        const numero2 = sotNum2.toString();
        setNum2(numero2)

       

    }

    function calcResposta(){
        
        const cnum1 = parseInt(num1, 10);
        const cnum2 = parseInt(num2, 10);

        switch (operador) {
            case '+':
                result = cnum1 + cnum2;
                break;
            case '-':
                result = cnum1 - cnum2;
                break;
            case '*':
                result = cnum1 * cnum2;
                break;
            case '/':
                result = cnum1 / cnum2;
                break;
        }

        validacao()
    }

    function validacao(){

        const resp = parseFloat(resposta);
        var acert = parseFloat(acerto);
        var err = parseFloat(erro);
        var pont = parseFloat(pontos)

        if (result == resp){
            pont += 10
            acert++
            sortearDesafio()
        }else if (result != resp){
            pont -= 5

            if (pont <=0){
                pont = 0
            }

            err++
        }

        const erros = err.toString()
        const acertos = acert.toString()
        const total = pont.toString()

        setResposta('')
        setAcerto(acertos)
        setErro(erros)
        setPontos(total)
        
    }

    function zerarSorteio(){
        setPontos('0')
        setResposta('')
        setErro('0')
        setAcerto('0')
       

    }

    
    
    

    return (
        <View style={styles.container}>

            <View style={styles.placar}>
                <Text style={styles.pontos}>Você tem {pontos} pontos</Text>
            </View>

            <View style={styles.count}>
                <Text style={styles.acerto}>Acertos: {acerto}</Text>
                <Text style={styles.erro}>Erros: {erro}</Text>
            </View>

            <View style={styles.form}>
                {/* <TextInput 
                    
                    style={styles.input}
                    placeholder='Informe um produto'
                    placeholderTextColor={'#fff'}
                    onChangeText={text => setNomeproduto(text)}
                    value={nomeproduto}

                ></TextInput> */}

                <TouchableOpacity 
                    style={styles.button}
                    onPress={sortearDesafio}>
                        
                    
                    <Text style={styles.textButton}>Sortear Desafio</Text>

                </TouchableOpacity>

            </View>

            <View style={styles.separator}/>

            <Text style={styles.title}>
                Quanto é: 
            </Text>

            <View style={styles.calculo}>

                <View style={styles.bloc}>
                    <Text style={styles.calc}>
                        {num1}
                    </Text>
                </View>
                <View style={styles.bloc}>
                    <Text style={styles.calc}>
                        {operador}
                    </Text>
                </View>
                <View style={styles.bloc}>
                    <Text style={styles.calc}>
                        {num2}
                    </Text>
                </View>
                
                {/* <Text style={styles.title}>Produtos</Text>


                <FlatList
                    data={produto}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <Produto name={item} onRemove={() => handleProdutoRemove(item)} />
                    )}
                /> */}
            </View>

            <Text style={styles.title}>
                    Informe sua resposta: 
            </Text>
            
            <View style={styles.inputt}> 

                <TextInput 
                    keyboardType="numeric"
                    style={styles.input}
                    onChangeText={text => setResposta(text)}
                    value={resposta}

                ></TextInput>

                <TouchableOpacity 
                    style={styles.bttResp}
                    onPress={calcResposta}>
                        
                    
                    <Text style={styles.textResp}>Validar</Text>

                </TouchableOpacity>

            </View>


            <View style={styles.nwGame}>

                <TouchableOpacity 
                    style={styles.zerar}
                    onPress={zerarSorteio}>
                            
                        
                    <Text style={styles.bttZerar}>Novo Jogo</Text>

                </TouchableOpacity>

            </View>

            
        </View>

        
        
        
        
    )
}