import { AxiosError, AxiosInstance, AxiosResponse } from "axios"
import { Api } from "../api/api"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ImageSourcePropType } from "react-native"

export interface skill{
    id:number
    foto:string
    nome:string
    descricao:string
    nivel:string
}
export interface usuario{
    id:number
    nome:string
    login:string
    senha:string
    url:string
    skills:skill[]
}
export interface usuarioLogin{
    token:string
    usuario:usuario
}
export interface loginI{
    login:string
    senha:string
}
export interface cadastro{
    nome:string
    login:string
    senha:string
}
export interface Token{
    token:string
}
export interface excluirUsuarioSkill{
    idUsuario:number,
    idSkill:number
}
export interface atualizarNivelSKill{
    idUsuario:number,
    idSkill:number,
    nivel:number
}
export interface adicionarUsuarioSkill{
    idUsuario:number,
    skill:[
        {id:number,
        nivel:number
        }
    ]
}

export const LoginUsuario =async (login:loginI):Promise<AxiosResponse<usuarioLogin>>=>{
    return await Api.post<usuarioLogin>("auth/login",login)
    .then((response:AxiosResponse<usuarioLogin>)=>{
        return response;
    }).catch((error:AxiosError)=>{
        throw error
    })
    }
export const Cadastrar =async(cadastro:cadastro):Promise<AxiosResponse<usuario>>=>{
    return await Api.post<usuario>("usuario",cadastro)
    .then((response:AxiosResponse)=>{
        return response;
    }).catch((error:AxiosError)=>{
        throw error
    })
}
export const DeletarUsuarioSkill = async (excluirUsuarioSkill: excluirUsuarioSkill): Promise<AxiosResponse> => {
    const token = await AsyncStorage.getItem('token');
    return await Api.put("usuarioSkill/deletar", excluirUsuarioSkill, {
      headers: {
        Authorization: "Bearer " + token
      }
    }).catch((error: AxiosError) => {
      throw error;
    });
  }

export const AtualizarSkill = async (atualizarSkill:atualizarNivelSKill):Promise<AxiosResponse>=>{
    const token= await AsyncStorage.getItem('token');
    return await Api.put("usuarioSkill", atualizarSkill ,{
        headers:{
            Authorization: "Bearer " + token
            }
    }).catch((error:AxiosError)=>{
        throw error
    })
}
export const ListarSkill = async ():Promise<AxiosResponse<skill[]>>=>{
    const token= await AsyncStorage.getItem('token');
    return await Api.get<skill[]>("skill",{
        headers:{
            Authorization: "Bearer "+token
            }
    }).catch((error:AxiosError)=>{
        throw error
    })
}
export const AdicionarUsuarioSkill = async (adicionarUSkill:adicionarUsuarioSkill):Promise<AxiosResponse>=>{
    const token= await AsyncStorage.getItem('token');
    return await Api.post("usuarioSkill",adicionarUSkill,{
        headers:{
            Authorization: "Bearer "+token
            }
    }).catch((error:AxiosError)=>{
        throw error
    })
}