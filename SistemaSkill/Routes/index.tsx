import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustonDrawer from '../components/CustomDrawer';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home';
import Teste from '../screens/teste';
import { SistemaContext } from '../context/SistemaSKill/SistemSkill';



export default function Routes() {
    const Drawer = createDrawerNavigator();
    const { autenticated, setAutenticated}=useContext(SistemaContext);
    return (
    <Drawer.Navigator
    drawerContent={CustonDrawer}
    screenOptions={{
        drawerInactiveTintColor:'gray',
        drawerActiveTintColor:'#00ff',
    }}
    >
    {autenticated?(
      <Drawer.Screen name='home' component={Home}/>
    ):(
      <>
      <Drawer.Screen name='login' component={Login}/> 
      <Drawer.Screen name='cadastro' component={Cadastro}/> 
      </>
    )}

    </Drawer.Navigator>
  )
}