import {Image, View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style';
import imagem from '../../assets/Login.png'
import Input from '../../components/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Cadastrar, cadastro } from '../../service/SistimaSkill/Sistemaskill';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
    const [nomeUsuario,setNomeUsuario]=useState("");
    const [login,setLogin]=useState("");
    const [senha,setSenha]=useState("");
    const [confirmarSenha,setConfirmarSenha]=useState("");
    const [mensagemErro,setMensagemErro]=useState("");
    const navigation = useNavigation();

    const cadastro = async()=>{
      if(senha !=confirmarSenha){
        setMensagemErro("Senhas diferentes!");
        return
      }
      if(login.length==0||senha.length==0||confirmarSenha.length==0){
        setMensagemErro("Todos os campos devem ser preenchidos.")
        return
      }
      const cadastroDTO:cadastro={
        nome:nomeUsuario,
        login:login,
        senha:senha,
      }
      try{
        const response = await Cadastrar(cadastroDTO);
        navigation.navigate('login');
      }catch(error){
        setMensagemErro(error.response.data.titulo);
      }
    }
  return (
    <SafeAreaView style={styles.container}>
        <Image source={imagem} style={styles.imagem}/>
        <Input valor={nomeUsuario} setValor={setNomeUsuario} placeholder='Digite seu nome' senha={false} textoAcessibilidade='Campo para digitar o nome'/>
        <Input valor={login} setValor={setLogin} placeholder='Digite seu login' senha={false} textoAcessibilidade='Campo para digitar o login'/>
        <Input valor={senha} setValor={setSenha} placeholder='Digite sua senha' senha={true} textoAcessibilidade='Campo para digitar a senha'/>
        <Input valor={confirmarSenha} setValor={setConfirmarSenha} placeholder='Confirme sua senha' senha={true} textoAcessibilidade='Campo para digitar a senha novamente para confirmação'/>
        <TouchableOpacity style={styles.botao} onPress={cadastro}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.textoErro}>{mensagemErro}</Text>
    </SafeAreaView>
  )
}