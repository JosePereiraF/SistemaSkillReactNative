import { View, Text } from 'react-native'
import React from 'react'
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons'; 
export default function Teste() {
    
  return (
    <View>
  
   <Ionicons name="add-circle" size={30} color="green" /> 
      <MaterialIcons name="star" size={30} color="yellow" /> 
      <Ionicons name="refresh" size={30} color="blue" />
      <MaterialIcons name="delete" size={30} color="red" />

    </View>
  )
}