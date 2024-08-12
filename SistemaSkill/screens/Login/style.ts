import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f0f0',
        justifyContent:'center',
        alignItems:'center',
        gap:15
    },
    imagemLogin:{
        width:200,
        height:200,
    },
    divSalvaSenha:{
        flexDirection:'row',
        width:"70%",
        justifyContent:"flex-end"
    },
    textoSalvaSenha:{
        fontSize:14,
    },
    botaoSalvarSenha:{
        width:20,
        height:16,
        borderRadius:1,
        borderColor:'black',
        borderWidth: 0.5,
        justifyContent:'center',
        alignItems:'center'
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