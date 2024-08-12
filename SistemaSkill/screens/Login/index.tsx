import { View, Text, SafeAreaView, Image} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { styles } from './style';
import Input from '../../components/Input';
import imagem from '../../assets/Login.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {  loginI, LoginUsuario, usuario } from '../../service/SistimaSkill/Sistemaskill';
import { AxiosError, AxiosResponse } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { SistemaContext } from '../../context/SistemaSKill/SistemSkill';

export default function Login() {
    const [login,setLogin]=useState("");
    const [senha,setSenha]=useState("");
    const [mensagemErro,setMensagemErro]=useState("");
    const [salvarSenha,setSalvarSenha]=useState(false);
    const navigation = useNavigation();
    const {setUsuario,setAutenticated,autenticated,setSkillsUsuario}=useContext(SistemaContext);
    const statusSalvarSenha=()=>{
      setSalvarSenha(!salvarSenha);
    }

    const logar =async ()=>{
      if(login.length==0||senha.length==0){
        setMensagemErro("Todos os campos devem ser preenchidos.")
        return
      }
        const loginDTO :loginI={
          login:login,
          senha:senha
        }
        try {
          if(salvarSenha){
            await AsyncStorage.setItem('credencial', JSON.stringify(loginDTO));
          }else{
            await AsyncStorage.setItem('credencial', JSON.stringify(null));
          }
          const response = await LoginUsuario(loginDTO);
          const usuarioLogado = response.data.usuario;
          await AsyncStorage.setItem('token', response.data.token);
          setUsuario(usuarioLogado);
          setAutenticated(!autenticated);
          setSkillsUsuario(usuarioLogado.skills);
          navigation.navigate('home');
      } catch (error) {
        setMensagemErro(error.response.data.titulo);
      }
    }
    const cadastro =()=>{
      navigation.navigate('cadastro');
    }

    useEffect( ()=>{
      const carregarCredencial = async()=>{
        const a = await AsyncStorage.getItem('credencial');
        if(a !=null){
          const credecial:loginI =  JSON.parse(a);
          setLogin(credecial.login);
          setSenha(credecial.senha);
          setSalvarSenha(!salvarSenha);
        }else{
          setLogin("");
          setSenha("");
        }
      }
      carregarCredencial();
    },[])

  return (
    <SafeAreaView style={styles.container}>
        <Image source={imagem} style={styles.imagemLogin}/>
      <Input valor={login} setValor={setLogin} placeholder="Digite seu login" senha={false} textoAcessibilidade='Campo para adicionar o login'/>
      <Input valor={senha} setValor={setSenha} placeholder="Digite sua senha" senha={true} textoAcessibilidade='Campo para adicionar a senha'/>
      <View style={styles.divSalvaSenha}>
        <Text style={styles.textoSalvaSenha}>Salvar senha </Text>
        <TouchableOpacity style={styles.botaoSalvarSenha} onPress={statusSalvarSenha}>
          <Text>{salvarSenha?"✓":""}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.botao} onPress={logar}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={cadastro}>
      <Text>Cadastre-se</Text>
      </TouchableOpacity>
      <Text style={styles.textoErro}>{mensagemErro}</Text>
    </SafeAreaView>
  )
}