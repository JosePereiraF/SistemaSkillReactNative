import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SistemaContext } from '../../context/SistemaSKill/SistemSkill';
import CardSkill from '../CardSkill';
import { ListarSkill } from '../../service/SistimaSkill/Sistemaskill';
import {Ionicons} from '@expo/vector-icons'; 
import { styles } from './style';

export default function ModalAdicionarSKill({onpress}) {
    const {skillsUsuario, setSkillsUsuario}=useContext(SistemaContext);
    
    useEffect(()=>{
        ListarSkill().then((res)=>{
         setSkillsUsuario(res.data)
        })
      },[])
  return (
   <ScrollView>
    <View style={styles.container}>
      <TouchableOpacity onPress={onpress}>
      <Ionicons name="close" size={30} color="green"/>
      </TouchableOpacity>
     <View>
        <Text>Tiitulo</Text>
     </View>
     <View>
        <FlatList
        data={skillsUsuario}
        scrollEnabled={false}
        renderItem={({item})=>{
           return <CardSkill skill={item} page='modal'/>
        }}
        />
     </View>
    </View>
   </ScrollView>
  )
}