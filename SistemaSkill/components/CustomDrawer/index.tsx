import { Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { SistemaContext } from '../../context/SistemaSKill/SistemSkill';
import {Ionicons}from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './style'
import { usuario } from '../../service/SistimaSkill/Sistemaskill';
import { useNavigation } from '@react-navigation/native';
export default function CustonDrawer(props:any) {
  const {usuario,autenticated,setAutenticated,setUsuario}=useContext(SistemaContext);
  const navigation = useNavigation();
  const logout=()=>{
    const usuarioLogout:any = {};
    setAutenticated(!autenticated);
    setUsuario(usuarioLogout);
    navigation.navigate('login');
  }
  return (
    <DrawerContentScrollView>
        <View
        style={{
          width:"100%",
          height:85,
          alignItems:"center",
          justifyContent:"center",
      }}
        >
          <View style={styles.divUsuario}>
            <View style={styles.divNomeUsuario}>
        <Text style={{ fontSize: 18, marginTop: 5, color: "#000" }}>
          {usuario.nome!=""&&usuario.nome!=null?usuario.nome:""}
        </Text> 
            </View>
            <View style={styles.divLogout}>
          {autenticated&&(
        <TouchableOpacity style={styles.botaoLogout} onPress={logout}>
          <Ionicons name="log-out" size={24} color="#000" />
        </TouchableOpacity>
          )}
            </View>
          </View>
        </View >

        <DrawerItemList {...props}/>

    </DrawerContentScrollView>
  )
}