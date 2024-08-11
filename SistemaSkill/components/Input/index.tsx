import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import {Ionicons} from '@expo/vector-icons'
import { styles } from './style';
interface InputProps{
    placeholder: string
    valor: string
    senha?:boolean
    textoAcessibilidade?:string
    setValor:any
}
export default function Input({placeholder,valor,senha,textoAcessibilidade,setValor}:InputProps) {
    const [senhaVisivel,setSenhaVisivel]= useState(true);

    const mostrarSenha=()=>{
        setSenhaVisivel(!senhaVisivel)
    }
  return (
      <View >
    {senha&&(
        <View style={styles.areaInput}>
        <TextInput placeholder={placeholder} style={styles.campoInput} secureTextEntry={senhaVisivel} value={valor} onChangeText={(e)=>setValor(e)}/>
        <TouchableOpacity style={styles.icone} onPress={mostrarSenha}>
            {!senhaVisivel?
                <Ionicons name="eye" size={24} color="gray" />
                :
                <Ionicons name="eye-off" size={24} color="gray" />
            }
        </TouchableOpacity>
        </View>
    )}
        {!senha&&(
        <View style={styles.areaInput}>
         <TextInput placeholder={placeholder} style={styles.campoInputTexto} value={valor} onChangeText={(e)=>setValor(e)}/>
        </View>
    )}
    </View>
  )
}