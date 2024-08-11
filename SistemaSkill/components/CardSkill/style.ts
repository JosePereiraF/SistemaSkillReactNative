import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 300,
        marginTop: 30,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems:'center',
        gap:5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 10,
      },
      divIcones:{
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'flex-end',
      },
    divImagemSkill: {
        justifyContent:'center',
        alignItems:'center',
        gap:10
    },
    imagemSkill:{
        width: 150,
        height: 150,
    },
    divAvaliacao: {
        justifyContent:'center',
        alignItems:'center',
        gap:10
    },
    divEstrela: {
        flexDirection:'row',
        gap:10
    },
    divDescricao: {
      width:"90%",
      paddingBottom:"5%"
    },
    textoDescricao: {
      
    },

})