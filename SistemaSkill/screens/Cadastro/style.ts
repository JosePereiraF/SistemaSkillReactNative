import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f0',
        justifyContent:'center',
        alignItems:'center',
        gap:15
    },
    imagem:{
        width:200,
        height:200,
    },
    botao:{
        width:200,
        height:50,
        backgroundColor:'#00b4d8',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    textoBotao:{
        fontSize:18,
        color:'#fff'
        },
        textoErro:{
            color:'red'
        }
})