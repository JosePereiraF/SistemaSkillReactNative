import { View, Text, FlatList,ScrollView, Modal } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import CardSkill from '../../components/CardSkill'
import { styles } from './style';
import { SistemaContext } from '../../context/SistemaSKill/SistemSkill';
import { ListarSkill, skill } from '../../service/SistimaSkill/Sistemaskill';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Ionicons} from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalAdicionarSKill from '../../components/ModalAdicionarSkill';


export default function Home() {

  const [modal,setModal]=useState<boolean>(false);
  const {skillsUsuario,setSkillsUsuario,usuario,skillsAdicionar,setSkillsAdicionar} =useContext(SistemaContext);
  useEffect(()=>{
    setSkillsUsuario(usuario.skills);

},[])
  const abrirModal = ()=>{
    setModal(!modal);
    setSkillsAdicionar(skillsUsuario);
  }
  const fecharModal=()=>{
    setModal(!modal);
    setSkillsUsuario(skillsAdicionar);
  }

  return (
    <ScrollView style={styles.scrool}>
      <View style={styles.container}>

      <View>
        <TouchableOpacity onPress={abrirModal} style={styles.DivAdicionarSkill}>
      <Ionicons name="add-circle" size={30} color="green" /> 
        </TouchableOpacity>
      </View>
      <View style={styles.containerSkill}>
      <FlatList
      data={skillsUsuario}
      scrollEnabled={false}
      renderItem={({item})=>{
        return <CardSkill skill={item} page='home'/>
      }}
      />
    {modal&&(
      <Modal style={styles.modal}>
        <ModalAdicionarSKill onpress={fecharModal}
        />
      </Modal>
    )}
      </View>
    </View>
    </ScrollView>
  )
}