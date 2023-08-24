import { Text, View, TextInput, TouchableOpacity, Alert, FlatList} from "react-native";
import React, { useState } from 'react';
import { styles } from './styles';
import { Produto } from "../../components/Produto";


export default function Home() {
    

    const [produto, setproduto] = useState<String[]>([]);
    const [nomeproduto, setNomeproduto] = useState('');


    function headleProdutoAdd() {

        if(nomeproduto.trim().length > 0){ 
            
            if (produto.includes(nomeproduto)){
                setNomeproduto('')
                Alert.alert("Nome já existe!")

            }else{

                setproduto([...produto, nomeproduto.trimStart()])
                setNomeproduto('')
            }
        }
        else{
            Alert.alert("Nome não pode ser vazio!")
        }
    }

    function handleProdutoRemove(name: String){
        Alert.alert('Remover',`Deseja remover o produto ${name}?`, 
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress : () => setproduto(prevState => prevState.filter(partic => partic != name))
                }
            ])

    }
    
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de compras</Text>
            <Text style={styles.date}>Quarta, 23 de agosto</Text>

            <View style={styles.form}>
                <TextInput 
                    
                    style={styles.input}
                    placeholder='Informe um produto'
                    placeholderTextColor={'#fff'}
                    onChangeText={text => setNomeproduto(text)}
                    value={nomeproduto}

                ></TextInput>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={headleProdutoAdd}>
                        
                    

                <Text style={styles.textButton}>ADICIONAR</Text>
            </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.title}>Produtos</Text>


                <FlatList
                    data={produto}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <Produto name={item} onRemove={() => handleProdutoRemove(item)} />
                    )}
                />
                

           
            </View>

            
        </View>

        
        
        
        
    )
}