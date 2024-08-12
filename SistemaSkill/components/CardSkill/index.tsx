import { View, Text,Image, TextComponent } from 'react-native'
import React, { useContext, useState } from 'react'
import imagem from '../../assets/excel.png'
import { styles } from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome';
import { adicionarUsuarioSkill, AdicionarUsuarioSkill, atualizarNivelSKill, AtualizarSkill, DeletarUsuarioSkill, excluirUsuarioSkill, skill } from '../../service/SistimaSkill/Sistemaskill';
import { SistemaContext } from '../../context/SistemaSKill/SistemSkill';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
interface skillprops{
  skill:skill
  page?:string
}
export default function CardSkill({skill,page}:skillprops) {
    const[visualizaInfo,setVisualizarInfo]=useState(false);
    const [nivel,setNivel]=useState(0);
    const [botaoAvaliar,setBotaoAvaliar]=useState(false);
    const {usuario,skillsUsuario,setSkillsUsuario,skillsAdicionar,setSkillsAdicionar}=useContext(SistemaContext);


    const ativarInfo=()=>{
        setVisualizarInfo(!visualizaInfo);
    }
    const deletarSkill = async () => {
      const excluirSkill: excluirUsuarioSkill = {
        idUsuario: usuario.id,
        idSkill: skill.id
      }
      try {
        await DeletarUsuarioSkill(excluirSkill);
        const skills = skillsUsuario.filter(item => item.id !== excluirSkill.idSkill);
        setSkillsUsuario(skills);
      } catch (error) {
      }
    }

      
      const avaliar=async (valor:number,texto:string)=>{
        setNivel(valor);
        if(!botaoAvaliar){
          setBotaoAvaliar(!botaoAvaliar);
        }

        setSkillsUsuario(skillsUsuario.map(item=> item.id === skill.id?{...item, nivel:texto}:item))
      }
      const confimarAvalicao=async()=>{
        const atualizarSkill:atualizarNivelSKill ={
          idUsuario:usuario.id,
          idSkill:skill.id,
          nivel:nivel
        }
        try {
          await AtualizarSkill(atualizarSkill);
          setBotaoAvaliar(!botaoAvaliar);

        } catch (error) {
          
        }
      }
      
      const adicionarSkill= async()=>{
        const adicionarSkillUsuario:adicionarUsuarioSkill={
          idUsuario:usuario.id,
          skill:[
            {
              id:skill.id,
              nivel:nivel
            }
          ]
        }
        try {
          await AdicionarUsuarioSkill(adicionarSkillUsuario);
          setSkillsAdicionar([skill,...skillsAdicionar])
          const skills = skillsUsuario.filter(item => item.id !== adicionarSkillUsuario.skill[0].id)
          setSkillsUsuario(skills);

        } catch (error) {
          
        }
      }
  return (
    <View style={styles.container}>
      {page=="home"&&(
      <View style={styles.divIcones}>
        {botaoAvaliar&&(
           <Ionicons name="refresh" size={30} color="blue" onPress={confimarAvalicao}/>
        )}
        
      <MaterialIcons name="delete" size={30} color="red" onPress={deletarSkill}/>
      </View>
      )}
      {page=="modal"&&(
        <View style={styles.divIcones}>
           <Ionicons name="add-circle" size={30} color="green" onPress={adicionarSkill}/> 
        </View>
      )}
      <View>
      </View>
        <View style={styles.divImagemSkill}>
         <Text>{skill.nome}</Text>
        <Image source={{uri:"http://192.168.1.15:8080/skill/foto/"+skill.id}} style={styles.imagemSkill}/>
        </View>
        <View style={styles.divAvaliacao}>
        <Text>{skill.nivel}</Text>
        <View style={styles.divEstrela}>
            <TouchableOpacity onPress={()=>avaliar(0,"Basico")}>
                <Icon name="star"  size={30} color="#ffbf00"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>avaliar(1,"Intermediario")}>
            <Icon name="star"  size={30} color={skill.nivel!="Basico"&&skill.nivel!=null?"#ffbf00":"gray"}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>avaliar(2,"Avançado")}>
            <Icon name="star"  size={30} color={skill.nivel=="Avançado"?"#ffbf00":"gray"}/>
            </TouchableOpacity>
        </View>
        </View>
        <TouchableOpacity onPress={ativarInfo}>
            <Text>{visualizaInfo?"Ver menos":"Ver mais"}</Text>
        </TouchableOpacity>
        {visualizaInfo&&(
        <View style={styles.divDescricao}>
            <Text  style={styles.textoDescricao}>{skill.descricao}</Text>
        </View>
        )}
    </View>
  )
}