import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { SistemaContext } from '../../context/SistemaSKill/SistemSkill';


export default function CustonDrawer(props:any) {
  const {usuario}=useContext(SistemaContext);
  return (
    <DrawerContentScrollView>
        <View
        style={{
          width:"100%",
          height:85,
          alignItems:"center",
          justifyContent:"center"
      }}
        >
        <Text style={{ fontSize: 18, marginTop: 5, color: "#000" }}>
          {usuario.nome!=""&&usuario.nome!=null?usuario.nome:""}
        </Text> 
        </View>
        <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  )
}